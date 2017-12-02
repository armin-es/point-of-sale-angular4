import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {
    // console.log(typeof afAuth);
}


  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

}
