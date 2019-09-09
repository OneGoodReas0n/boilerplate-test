import { fromJS } from 'immutable';
import {
  LOAD_EMPLOYEES_ERROR,
  LOAD_EMPLOYEES_PENDING,
  LOAD_EMPLOYEES_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  employees: [],
  error: null,
});

/* eslint-disable default-case, no-param-reassign */
const employeeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        employees: action.employees,
      };
    case LOAD_EMPLOYEES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default employeeListReducer;
