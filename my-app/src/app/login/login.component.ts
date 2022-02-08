import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

//ERROR TEST
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//ERROR TEST

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //ERROR TEST
  loginForm !: FormGroup;
  loading = false;
  submitted = false;
  //returnUrl !: string;
  //error !: string;
  //ERROR TEST

  /*
    username !: string ;
    email !: string ;
    password !: string;
  */
  user = new User;

 
  erreur = 0;
  //longeurEmail = -1;
  //longeurPassword = -1;


  constructor(private authService : AuthService,
              private router: Router,
              //ERROR TEST
              ///////////////////////////////////
              private formBuilder : FormBuilder,
              private route : ActivatedRoute
              //ERROR TEST
              ) { 
                //ERROR TEST
                //////////////////////Prevent logged user from login in page reload
                if (this.authService.isAdmin()) {this.router.navigate(['/ColorGame']);}
                //ERROR TEST
              }

  ngOnInit(): void {
    //ERROR TEST
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password : ['', [Validators.required, Validators.minLength(5)]]
    });
    /*this.loginForm.setValue({ 
      email : '',
      password: ''
    });*/
    //ERROR TEST
  }
  //ERROR TEST
  
  //ERROR TEST
  get f() {return this.loginForm.controls;}
  get mail() {return this.loginForm.get('email');}
  get pass() {return this.loginForm.get('password');}
  //ERROR TEST


  onSubmit() {
    this.loading = true;
    this.submitted = true;

    console.log(this.loginForm.get('password')?.hasError('required'));
    console.log(this.loginForm.get('password'));
    //Stop here if form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }


    this.onLoggedin();
    this.loading = false;

  }
  //ERROR TEST

  //user test
  /*onLoggedin(){
    console.log(this.loginForm.getRawValue());
    console.log(this.user);
    console.log(this.loginForm.get('password'));
    console.log(this.loginForm.controls);
    //console.log(this.loginForm.controls.password.value);
    
    //ERROR TEST
    //this.user.email = this.f.email.value;
    //this.user.password = this.f.password.value;

    let isValidUser: Boolean = this.authService.SignIn(this.user);
    
    
    //if (this.authService.VideEmail(this.user)) this.longeurEmail = 0;
    if (isValidUser){
      this.erreur = 0;
      this.loading =false;
      /////////////////////////////After success login go to ColorGame
      this.router.navigate(['/']);
    }
      
    else
    this.erreur = 1;
      //alert('Login ou mot de passe incorrecte!');
    

  }*/

  onLoggedin() {
    this.authService.getUserFromDB(this.user.email).subscribe((usr: User) => {
      if (usr.password == this.user.password) {
        this.authService.SignIn(usr);
        this.erreur = 0;
        this.loading = false;
        this.router.navigate(['/']);
      }
      else
        this.erreur = 1;
    }, (err) => console.log(err));
  }


}
