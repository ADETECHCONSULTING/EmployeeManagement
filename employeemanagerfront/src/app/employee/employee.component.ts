import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getEmployeesAction } from './store/actions';
import { employeeSelector } from './store/selector';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees$: Observable<Employee[] | null>;
  deleteEmployee: Employee;
  editEmployee: Employee;
  addEmployee: Employee;

  constructor(private employeeService: EmployeeService, private store: Store) {}

  ngOnInit() {
    this.initializeData();
  }

  private initializeData() {
    this.store.dispatch(getEmployeesAction());
    this.employees$ = this.store.pipe(select(employeeSelector));
  }

  onOpenModal(employee: Employee | null, mode: string): void {
    //create a button to open the modal bootstrap
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }

  searchEmployees(key: string): void {}
    
  onAddEmployee(addForm : any): void {}

  onUpdateEmployee(employee: Employee): void {}

  onDeleteEmployee(employeeId: number | undefined): void {}
}
