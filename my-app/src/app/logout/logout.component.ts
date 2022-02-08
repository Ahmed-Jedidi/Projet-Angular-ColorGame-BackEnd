import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }

}
