import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';  
import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
 
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
