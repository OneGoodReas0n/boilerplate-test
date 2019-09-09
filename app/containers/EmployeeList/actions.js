/*
 *
 * EmployeeList actions
 *
 */

import {
  LOAD_EMPLOYEES_ERROR,
  LOAD_EMPLOYEES_PENDING,
  LOAD_EMPLOYEES_SUCCESS,
} from './constants';

export function loadEmployeesPending() {
  return {
    type: LOAD_EMPLOYEES_PENDING,
  };
}

export function loadEmployeesSuccess(employees) {
  return {
    type: LOAD_EMPLOYEES_SUCCESS,
    employees,
  };
}

export function loadEmployeesError(error) {
  return {
    type: LOAD_EMPLOYEES_ERROR,
    error,
  };
}
