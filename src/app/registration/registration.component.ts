import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  name:string = "";
  names:string[] = [];

  register(){
    this.names.push(this.name);
  }

  // ===========================

  empName:string = "";
  role:string = "";

  employees:any = [];
  
  add(){

    let employee = {
      name: this.empName,
      role: this.role
    }

    this.employees.push(employee);

  }

}
