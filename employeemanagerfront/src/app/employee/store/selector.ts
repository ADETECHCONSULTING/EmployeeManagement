import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./EmployeeState.interface";

export const employeeFeatureSelector = createFeatureSelector<EmployeeState>('employees');

export const employeeSelector = createSelector(employeeFeatureSelector, (state: EmployeeState) => state.employees);