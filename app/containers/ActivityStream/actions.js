import {
  LOAD_ACTIVITY_DATA,
  LOAD_ACTIVITY_DATA_SUCCESS,
  LOAD_ACTIVITY_DATA_ERROR,
} from './constants';

export function loadActivityData() {
  return {
    type: LOAD_ACTIVITY_DATA,
  };
}

export function ActivityDataLoaded(activities) {
  return {
    type: LOAD_ACTIVITY_DATA_SUCCESS,
    activities,
  };
}

export function ActivityDataLoadingError(error) {
  return {
    type: LOAD_ACTIVITY_DATA_ERROR,
    error,
  };
}
