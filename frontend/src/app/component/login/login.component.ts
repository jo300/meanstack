import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: LoginService) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}
  login() {
    console.log(this.loginForm.value);
    this.service.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
