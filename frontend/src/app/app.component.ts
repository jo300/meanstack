import { Component } from '@angular/core';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerVisible = 'hidden';
  title = 'curd-mean';
  constructor(public authService: LoginService) {}
}
