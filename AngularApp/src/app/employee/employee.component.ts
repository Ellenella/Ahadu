import { Component, OnInit } from '@angular/core';




import { EmployeeService } from '../shared/employee.service';
//import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';


declare var M:any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers :[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor( public employeeService : EmployeeService) { }

  ngOnInit(){
    this.resetForm();
    this.refreshEmployeeList();
    //this.onSubmit();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
      
    }
   // M.toast({html: 'saved successfull!' , class: 'rounded'});
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.employeeService.postEmployee(form.value).subscribe((res) =>{
      this.resetForm(form);
      this.refreshEmployeeList();
      M.toast({html: 'saved successfull!' , class: 'rounded'});
      console.log(this.employeeService.selectedEmployee.position);

    });
  }else{
    this.employeeService.putEmployee(form.value).subscribe((res) =>{
      this.resetForm(form);
      this.refreshEmployeeList();
      M.toast({html: 'update successfull!' , class: 'rounded'});

    });

  }

  }
  refreshEmployeeList(){
    this.employeeService.getEmployeList().subscribe((res) =>{
      this.employeeService.employees = res as Employee[];


    });
  }
  onEdit(emp :Employee){
    this.employeeService.selectedEmployee = emp;

  }
  onDelete(_id: string , form : NgForm){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmploye(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
    
  }

}
