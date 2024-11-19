import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

// CanvasJS module
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';  
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import {MatTableModule} from '@angular/material/table';
import { ChartsComponent } from './charts/charts.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';



// Routes
const routes: Routes = [
  { path: "", component: DashboardComponent },
  {path:"table1",component:Table1Component },
  {path:"table2",component:Table2Component },
  {path:"charts",component: ChartsComponent},
  { path: "piechart", component: PieChartComponent },
  { path: "login", component: LoginComponent, children: [{ path: "signup", component: SignupComponent }] },
  { path: "signup", component: SignupComponent, children: [{ path: "login", component: LoginComponent }] },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PieChartComponent,
    ChartsComponent,
    Table1Component, 
    Table2Component
   
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    CanvasJSAngularChartsModule,
    CommonModule,
    MatTableModule,

  ],
 

  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  bootstrap: [AppComponent],
})
export class AppModule {}
