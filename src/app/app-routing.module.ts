import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent,children:[
    {path:'home', component:HomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'registration', component:RegistrationComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
  ]},
  {path:'',component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
