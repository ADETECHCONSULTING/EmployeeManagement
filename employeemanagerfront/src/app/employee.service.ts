
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient) { }
    
    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(`${environment.apiUrl}/all`);
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(`${environment.apiUrl}/add`, employee);
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(`${environment.apiUrl}/update`, employee);
    }

    deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${environment.apiUrl}/delete/${id}`);
    }
}