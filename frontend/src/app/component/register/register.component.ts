import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/service/login.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: LoginService) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      phone: [''],
    });
  }

  ngOnInit(): void {}
  add() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value);
  }
}
