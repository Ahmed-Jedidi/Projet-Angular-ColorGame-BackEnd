import { Router } from '@angular/router';
import { Role } from './../model/role.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

//ERROR TEST
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//ERROR TEST

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    //ERROR TEST
    loginForm !: FormGroup;

    submitted = false;
    //returnUrl !: string;
    //error !: string;
    //ERROR TEST

  users !: User[]; //un tableau de User

  newUser = new User();

  submittted !: number;

  roles !: Role[];

  newIdRole !: number;

  newRole !: Role;

  constructor( private authService : AuthService,
               private router : Router,
                //ERROR TEST
                ///////////////////////////////////
                private formBuilder : FormBuilder,
                //ERROR TEST
              ) { }

  ngOnInit(): void {
    //ERROR TEST
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: [null, [Validators.required]]
    });
    //ERROR TEST
    this.submittted = 0;
    console.log(this.submittted);

    /*this.roles = this.authService.listeRoles();*/

    this.authService.listeRoles().subscribe(rols => {
      console.log(rols);
      this.roles = rols;
    });
    this.authService.listeUsers().subscribe(usrs => {
      console.log(usrs);
      this.users = usrs;
    });
  }


    //ERROR TEST
    get f() {return this.loginForm.controls;}
    get name() {return this.loginForm.get('username');}
    get mail() {return this.loginForm.get('email');}
    get pass() {return this.loginForm.get('password');}
    get ro() {return this.loginForm.get('role');}
    //ERROR TEST

  onSubmit() {

    this.submitted = true;

    //console.log(this.loginForm.get('username')?.hasError('required'));
    //console.log(this.loginForm.get('username'));
    //console.log(this.loginForm.get('email')?.hasError('required'));
    //console.log(this.loginForm.get('email'));
    //console.log(this.loginForm.get('password')?.hasError('required'));
    //console.log(this.loginForm.get('password'));

    //Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.addUser();

  }





  addUser() {
    //this.authService.consulterRole(this.newIdRole).subscribe((r : Role)=> {this.newRole = r;  /*console.log(r);*/ });
    //this.newUser.role = this.newRole;
    console.log(this.newIdRole);
    console.log("no", this.newUser);
    this.authService.ajouterUser(this.newUser).subscribe(usr => { console.log(usr); });
    this.submittted = 1;
    console.log(this.submittted);
    this.router.navigate(['/users']);
  }

  /*addUser() {

    this.newRole = this.authService.consulterRole(this.newIdRole);
    this.newUser.role = this.newRole;

    console.log(this.newUser);
    this.authService.ajouterUser(this.newUser);
    this.submitted = 1;
    console.log(this.submitted);
  }*/

}




