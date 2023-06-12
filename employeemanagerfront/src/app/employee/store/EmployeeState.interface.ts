import { HttpErrorResponse } from "@angular/common/http";
import { Employee } from "src/app/employee";

export interface EmployeeState {
    employees: Employee[] | [];
    error: HttpErrorResponse | null;
    isLoading: boolean;
}