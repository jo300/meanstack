import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class productService {
  BACKEND_URL = 'http://localhost:3000/api/product';
  constructor(private http: HttpClient, public router: Router) {}

  getProducts() {
    return this.http.get(this.BACKEND_URL + '/getAllproducts');
  }

  create(productObj: any) {
    console.log(productObj);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.BACKEND_URL + '/createProduct', productObj, {
      responseType: 'text',
    });
  }
  addCart(data: any) {
    console.log(data);
    return this.http.post(this.BACKEND_URL + '/addCart', data, {
      responseType: 'text',
    });
  }
}
