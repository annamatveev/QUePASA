import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ACTIVITY_DATA } from 'containers/App/constants';

import request from 'utils/request';
import { ActivityDataLoaded, ActivityDataLoadingError } from './actions';

export function* getActivities() {
  const requestURL = 'http://localhost:3000/api/activities';

  try {
    const activities = yield call(request, requestURL);
    yield put(ActivityDataLoaded(activities));
  } catch (err) {
    yield put(ActivityDataLoadingError(err));
  }
}

// Individual exports for testing
export default function* activityStreamSaga() {
  yield takeLatest(LOAD_ACTIVITY_DATA, getActivities);
}
