import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { addEmployeeAction, deleteEmployeeAction, getEmployeesAction, updateEmployeeAction } from './store/actions';
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
      this.addEmployee = {} as Employee;
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee as Employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee as Employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }

  searchEmployees(key: string): void {}
    
  onAddEmployee(addForm : any): void {
    this.store.dispatch(addEmployeeAction({employee: addForm.value}));
  }

  onUpdateEmployee(employee: Employee): void {
    this.store.dispatch(updateEmployeeAction({employee}));
  }

  onDeleteEmployee(employeeId: number | undefined): void {
    if (!employeeId) return;
    this.store.dispatch(deleteEmployeeAction({employeeId}));
  }
}
