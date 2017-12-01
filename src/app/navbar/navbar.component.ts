import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(x =>
    //   console.log(x.displayName.split(" ")[0])
    // );

  }

  ngOnInit() {}

  logout() {
    this.afAuth.auth.signOut();
  }

  getUserFirstName(user) {
    return user.displayName.split(" ")[0];
  }
}
