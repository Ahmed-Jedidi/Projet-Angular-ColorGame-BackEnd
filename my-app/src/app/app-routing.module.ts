import { AdminGuard } from './admin.guard';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { ColorGameGuard } from './color-game.guard';
import { ColorHistoryComponent } from './color-history/color-history.component';

//API REST
import { AddUserComponent } from './add-user/add-user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {path: "login", component : LoginComponent },
  {path: "logout", component : LogoutComponent , canActivate:[ColorGameGuard]},
  {path: "ColorGame", component : ColorGameComponent , canActivate:[ColorGameGuard]},
  {path: "History", component : ColorHistoryComponent , canActivate:[ColorGameGuard]},


  //API REST
  {path: "users", component : UsersComponent , canActivate:[AdminGuard]},
  {path: "add-user", component : AddUserComponent , canActivate:[AdminGuard]},

  //Forbidden non Admin
  {path: 'app-forbidden', component: ForbiddenComponent},


  { path: "", redirectTo: "ColorGame", pathMatch: "full" },
  //Othterwise redirect to ColorGame
  { path: "*", redirectTo: "ColorGame"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
