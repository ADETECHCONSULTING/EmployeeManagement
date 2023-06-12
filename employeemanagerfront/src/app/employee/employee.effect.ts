import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, of, mergeMap, switchMap } from "rxjs";
import { addEmployeeAction, addEmployeeFailureAction, addEmployeeSuccessAction, deleteEmployeeAction, deleteEmployeeFailureAction, deleteEmployeeSuccessAction, getEmployeesAction, getEmployeesFailureAction, getEmployeesSuccessAction, updateEmployeeAction, updateEmployeeSuccessAction } from "./store/actions";
import { Injectable } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Employee } from "../employee";

@Injectable()
export class GetEmployeesEffect {

    constructor(private employeeService: EmployeeService, private actions$: Actions) { }

    getEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getEmployeesAction),
            switchMap(() => {
                return this.employeeService.getEmployees().pipe(
                    map((employees: Employee[]) => {
                        return getEmployeesSuccessAction({employees})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(getEmployeesFailureAction({error: errorResponse.error.errors}))
                    })
                )
            })
        )
    });

    addEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addEmployeeAction),
            switchMap(({employee}) => {
                return this.employeeService.addEmployee(employee).pipe(
                    map((employee: Employee) => {
                        return addEmployeeSuccessAction({employee})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(addEmployeeFailureAction({error: errorResponse.error.errors}))
                    })
                )
            })
        )
    });

    updateEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateEmployeeAction),
            switchMap(({employee}) => {
                return this.employeeService.updateEmployee(employee).pipe(
                    map((employee: Employee) => {
                        return updateEmployeeSuccessAction()
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(addEmployeeFailureAction({error: errorResponse.error.errors}))
                    })
                )
            })
        )
    });

    deleteAction$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteEmployeeAction),
            switchMap(({employeeId}) => {
                return this.employeeService.deleteEmployee(employeeId).pipe(
                    map(() => {
                        return deleteEmployeeSuccessAction({employeeId})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(deleteEmployeeFailureAction({error: errorResponse.error.errors}))
                    })
                )
            })
        )});
}