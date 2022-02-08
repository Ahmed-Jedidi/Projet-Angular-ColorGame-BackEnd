import { Role } from './../model/role.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  You !: string[]; //un tableau de chaines de caractères
  users !: User[]; //un tableau de User
  roles !: Role[]; //un tableau de Role



  constructor(private authService : AuthService) {
    
    /*//this.users = authService.listeUsers();
    //this.roles = authService.listeRoles();*/
    this.authService.listeRoles().subscribe(rols => {
      console.log(rols);
      this.roles = rols;
    });
    this.authService.listeUsers().subscribe(usrs => {
      console.log(usrs);
      this.users = usrs;
    });
    

  }

  ngOnInit(): void {
  }



  ///////////////////////////////////////////////////





}
