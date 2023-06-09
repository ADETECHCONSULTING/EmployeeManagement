import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";
import { HttpErrorResponse } from "@angular/common/http";
import { Employee } from "src/app/employee";

export const getEmployeesAction = createAction(
    ActionTypes.GET_EMPLOYEES
)

export const getEmployeesSuccessAction = createAction(
    ActionTypes.GET_EMPLOYEES_SUCCESS,
    props<{employees: Employee[]}>()
)

export const getEmployeesFailureAction = createAction(
    ActionTypes.GET_EMPLOYEES_FAILURE,
    props<{error: HttpErrorResponse}>()
)