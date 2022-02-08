import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //API REST
  apiURL: string = 'http://localhost:8084/userBackEnd/all';
  apiURL1: string = 'http://localhost:8084/userBackEnd/role';
  apiURL2: string = 'http://localhost:8084/userBackEnd/';
  apiURL3: string = 'http://localhost:8084/userBackEnd/logino';

  /*class User
    iduser !: number;
    username !: string ;
    email !: string ;
    password !: string;
    roles !:string[];
  */
  //Local Users Data 
  public You !: string[]; //un tableau de chaines de caractères
  users !: User[]; //un tableau de User
  roles !: Role[]; //un tableau de Role
  /*roles: Role[] = [
                    { idRole: 1, nomRole: "Admin" },
                    { idRole: 2, nomRole: "User" }];
  users: User[] = [
    { "iduser": 1, "username": "Ahmed", "email": "ahmedjedidi@gmail.com", "password": "123456789", role: { idRole: 1, nomRole: "Admin" } },
    { "iduser": 2, "username": "Aymen", "email": "aymengharbi@gmail.com", "password": "123456789", role: { idRole: 1, nomRole: "Admin" } },
    { "iduser": 3, "username": "Ahmed", "email": "ahmed.jedidi.stage@b2m-it.com", "password": "123456789", role: { idRole: 1, nomRole: "Admin" } },
    { "iduser": 4, "username": "Aymen", "email": "aymen.gharbi@b2m-it.com", "password": "123456789", role: { idRole: 1, nomRole: "Admin" } }
  ];*/

  //role !: new Role;


  public loggedUser !: string;
  public isloggedIn: Boolean = false;
  public AdminOrUser !: string;

  


  constructor(private router: Router,
    //API REST
    private http: HttpClient) {

    this.You = ["Ahmed", "Amal", "Yosr"],

      this.roles = [
        /*{ idRole: 1, nomRole: "Admin" },
      { idRole: 2, nomRole: "User" }*/];

    this.users = [
      /*{ "iduser": 1, "username": "Ahmed", "email": "ahmedjedidi@gmail.com", "password": "123456789", role: { idRole: 1, nomRole: "Admin" } },
      { "iduser": 2, "username": "Aymen", "email": "aymengharbi@gmail.com", "password": "123456789", role: { idRole: 1, nomRole: "User" } },
      { "iduser": 3, "username": "Ahmed", "email": "ahmed.jedidi.stage@b2m-it.com", "password": "123456789", role: { idRole: 1, nomRole: "Admin" } },
      { "iduser": 4, "username": "Aymen", "email": "aymen.gharbi@b2m-it.com", "password": "123456789", role: { idRole: 1, nomRole: "User" } }
    */];
  }


//////////////////////////////////////////////////////////////////////////////////////////

  /*listeUsers(): User[] {
    return this.users;
  }*/

  /*listeRoles(): Role[] {
    return this.roles;
  }*/

  /*ajouterUser(usr: User) {
    this.users.push(usr);
  }*/

  role = new Role();

  /*consulterRole(id: number): Role {
    this.role = this.roles.find(rol => rol.idRole == id)!;
    return this.role;
  }*/

/////////////////////////////////////////////////////////////////////////////////

  //API REST

  listeUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  listeRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiURL1);
  }

  ajouterUser(usr: User): Observable<User> {
    return this.http.post<User>(this.apiURL2, usr, httpOptions);
  }

  consulterRole(id: number): Observable<Role> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get<Role>(url);
  }

 /* consulterRole(id:number): Role  {
    
    this.role = this.roles.find(rol => rol.idRole == id);
    return this.role;
    }*/
  
/////////////////////////////////////////////////////////////////////////////////////////

  //Spring Boot
  getUserFromDB(email: string): Observable<User> {
    const urll = `${this.apiURL3}/${email}`;
    return this.http.get<User>(urll);
  }


//////////////////////////////////////////////////////////////////////////////////////////
  /*VideEmail(user : User):Boolean{
    if(user.email == "") 
    {return true;}
    else
    { return false;}
  }

  VidePassword(user : User):Boolean{
    if(user.password == "")  this.password.length == 0
    { return true;}
    else 
     {return false;}
  }*/

  //login
  /*SignIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
    if(user.email === curUser.email && user.password==curUser.password) {
    validUser = true;
    this.loggedUser = curUser.username;
    this.isloggedIn = true;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
    });
    return validUser;
    }*/
  SignIn(user: User) {
    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.AdminOrUser = String(user.role.nomRole);
    localStorage.setItem('loggedUser', this.loggedUser);
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    localStorage.setItem('AdminOrUser', String(user.role.nomRole));
  }





  logout() {
    this.isloggedIn = false;
    this.loggedUser = "";
    this.loggedUser != undefined;
    this.AdminOrUser = "";
    this.AdminOrUser != undefined;


    localStorage.removeItem('loggedUser');
    localStorage.removeItem('AdminOrUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));

    this.router.navigate(['/login']);
  }


  isAdmin(): Boolean {
    if (!this.loggedUser) //this.loggedUser == undefiened
      return false;
    return true;//(this.loggedUser.indexOf('A') >-1) ;
    ;
  }


  setLoggedUserFromLocalStorage(login: string, rol: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.AdminOrUser = rol;
  }



  isAdminVIP(): Boolean {
    let adminVIP: boolean = false;
    if (!this.AdminOrUser) { return false; }
    if (this.AdminOrUser == "Admin") { adminVIP = true; }
    return adminVIP;
  }



}
