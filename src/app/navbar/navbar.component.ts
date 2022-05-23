import { Component, OnInit } from '@angular/core';
import { AuthService } from '../dashboard/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private autoSrv : AuthService) {}

    ngOnInit(): void {}

    logout(){
      this.autoSrv.logout()
    }
}
