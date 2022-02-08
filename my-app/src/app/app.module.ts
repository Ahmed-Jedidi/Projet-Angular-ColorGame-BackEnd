import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ColorHistoryComponent } from './color-history/color-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorGameComponent,
    LoginComponent,
    LogoutComponent,
    AddUserComponent,
    UsersComponent,
    ForbiddenComponent,
    ColorHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ngModel Data Binding
    FormsModule,
    //API REST
    HttpClientModule

    ///////////////////////
    ,ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
