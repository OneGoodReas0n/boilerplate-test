import { all, takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_EMPLOYEES_PENDING, SERVER } from './constants';
import {
  loadEmployeesError,
  loadEmployeesPending,
  loadEmployeesSuccess,
} from './actions';

function* watchFetchEmployees() {
  yield takeLatest(LOAD_EMPLOYEES_PENDING, getEmployees);
}

function* getEmployees() {
  try {
    yield put(loadEmployeesPending());
    const data = yield call(() =>
      fetch(`${SERVER}/employees`).then(res => res.json()),
    );
    yield put(loadEmployeesSuccess(data));
  } catch (error) {
    yield put(loadEmployeesError(error));
  }
}

export default function* employeeListSaga() {
  yield all([watchFetchEmployees()]);
}
