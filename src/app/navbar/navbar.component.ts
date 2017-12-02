import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

  getUserFirstName(user) {
    return user.displayName.split(' ')[0];
  }
}
