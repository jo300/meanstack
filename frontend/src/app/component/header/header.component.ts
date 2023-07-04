import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  constructor(
    public authService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      searchValue: [''],
    });
  }

  ngOnInit(): void {}
  searchValue(event: Event) {
    console.log(event);
  }
  logOut() {
    this.authService.logout();
  }
}
