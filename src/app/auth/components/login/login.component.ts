import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword = true

  constructor() { }

  ngOnInit(): void {
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

}
