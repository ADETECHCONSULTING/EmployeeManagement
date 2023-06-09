import { createReducer, on } from "@ngrx/store";
import { EmployeeState } from "./EmployeeState.interface";
import { getEmployeesAction, getEmployeesFailureAction, getEmployeesSuccessAction } from "./actions";

const initialState: EmployeeState = {
    employees: [],
    error: null,
    isLoading: false
}

export const employeeReducer = createReducer(
    initialState,
    on(getEmployeesAction, (state): EmployeeState => ({
        ...state,
        isLoading: true
    })),
    on(getEmployeesSuccessAction, (state, action): EmployeeState => ({
        ...state,
        isLoading: false,
        employees: action.employees
    })),
    on(getEmployeesFailureAction, (state, action): EmployeeState => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducer(state: EmployeeState | undefined, action: any) {
    return employeeReducer(state, action);
}