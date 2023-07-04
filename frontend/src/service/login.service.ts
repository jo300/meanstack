import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';
import { Jwt } from './../../src/app/model/jwt';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenTimer: any;
  private isAuthenticated = false;
  private encodedData: Jwt | undefined;
  private authStatusListener = new Subject<boolean>();
  _authStatusListener = this.getAuthStatusListener();
  BACKEND_URL = 'http://localhost:3000/api/auth';
  private token: string = '';
  constructor(
    private http: HttpClient,
    public router: Router,
    private decode: JwtService
  ) {
    // const authToken = localStorage.getItem('token');
    // this.authStatusListener.next(!!authToken);
    this.autoAuthUser();
  }

  register(userObj: any) {
    const regObj = {
      name: userObj.name,
      email: userObj.email,
      password: userObj.password,
      phone: userObj.phone,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(this.BACKEND_URL + '/register', regObj, {
        responseType: 'text',
      })
      .subscribe((res) => {
        if (res) {
          this.router.navigate(['/']);
          console.log(res);
        } else {
          this.authStatusListener.next(false);
          console.log(res);
        }
      });
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login(email: string, password: string) {
    const authObj = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number; userId: string }>(
        this.BACKEND_URL + '/login',
        authObj
      )
      .subscribe((res) => {
        const token = res.token;
        console.log(res);
        this.token = token;
        if (token) {
          const enData = JSON.parse(atob(token.split('.')[1]));
          // const enData = this.decode.DecodeToken(token);

          const userId = enData.id;
          const expiresInDuration = new Date(enData.exp);
          console.log(expiresInDuration);
          this.isAuthenticated = true;
          const now = new Date();
          const expDuration = new Date(
            now.getTime() + expiresInDuration.getTime()
          );
          console.log('newDate', now);
          this.router.navigate(['home']);
          this.saveAuthData(token, expDuration, userId);
          this.autoAuthUser();
          this.authStatusListener.next(true);
        }
      });
  }

  private setAuthTimer(duration: number) {
    const logOutDuration = duration / 1000;
    console.log('Setting timer: ' + logOutDuration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, logOutDuration);
  }
  logout() {
    this.token = '';
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    this.isAuthenticated = false;
    clearTimeout(this.tokenTimer);
  }
  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
    };
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    console.log('here you are ', expiresIn);
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn);
      this.authStatusListener.next(true);
    }
  }
}
