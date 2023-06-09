import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, catchError, of, mergeMap, switchMap } from "rxjs";
import { getEmployeesAction, getEmployeesFailureAction, getEmployeesSuccessAction } from "./store/actions";
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


}