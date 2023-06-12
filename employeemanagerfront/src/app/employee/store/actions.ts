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

export const addEmployeeAction = createAction(
    ActionTypes.ADD_EMPLOYEE,
    props<{employee: Employee}>()
)

export const addEmployeeSuccessAction = createAction(
    ActionTypes.ADD_EMPLOYEE_SUCCESS,
    props<{employee: Employee}>()
)

export const addEmployeeFailureAction = createAction(
    ActionTypes.ADD_EMPLOYEE_FAILURE,
    props<{error: HttpErrorResponse}>()
)

export const updateEmployeeAction = createAction(
    ActionTypes.UPDATE_EMPLOYEE,
    props<{employee: Employee}>()
)

export const updateEmployeeSuccessAction = createAction(
    ActionTypes.UPDATE_EMPLOYEE_SUCCESS
)

export const updateEmployeeFailureAction = createAction(
    ActionTypes.UPDATE_EMPLOYEE_FAILURE,
    props<{error: HttpErrorResponse}>()
)

export const deleteEmployeeAction = createAction(
    ActionTypes.DELETE_EMPLOYEE,
    props<{employeeId: number}>()
)

export const deleteEmployeeSuccessAction = createAction(
    ActionTypes.DELETE_EMPLOYEE_SUCCESS,
    props<{employeeId: number}>()
)

export const deleteEmployeeFailureAction = createAction(
    ActionTypes.DELETE_EMPLOYEE_FAILURE,
    props<{error: HttpErrorResponse}>()
)