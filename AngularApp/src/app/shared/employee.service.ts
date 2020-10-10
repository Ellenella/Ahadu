import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//import { Observable } from 'rxjs/Observable';


 //import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';


import {Employee} from './employee.model';


@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseUrl = 'http://localhost:3000/employees';

  //selectedEmployee = Employee;
  //employees =  Employee[];

  constructor(public http : HttpClient) { }

  postEmployee(emp : Employee){
    return this.http.post(this.baseUrl , emp);

  }

  getEmployeList(){
    return this.http.get(this.baseUrl);
  }

 // putEmployee(emp: Employee){
   // return this.http.put(this.baseUrl + `/${emp._id}` , emp);

  
  putEmployee(emp: Employee) {
    return this.http.put(this.baseUrl + `/${emp._id}`, emp);
  }
  deleteEmploye(_id: string){
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
  

}
 