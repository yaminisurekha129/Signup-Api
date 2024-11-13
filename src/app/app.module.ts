import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';  
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component: AppComponent },
  {path:"home",component: HomeComponent},
  {
    path:"login",component:LoginComponent,
    children:
  [
    {
      path:"signup",component:SignupComponent,
    }
  ]
  },
  {
    path:"signup",component:SignupComponent,
    children:
    [
      {
        path:"login",component:LoginComponent,
      }

    ]
    
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  ,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
