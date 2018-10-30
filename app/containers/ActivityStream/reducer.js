import { fromJS } from 'immutable';

import {
  LOAD_ACTIVITY_DATA_SUCCESS,
  LOAD_ACTIVITY_DATA,
  LOAD_ACTIVITY_DATA_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  activities: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTIVITY_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn('activities', false);
    case LOAD_ACTIVITY_DATA_SUCCESS:
      return state.set('activities', action.activities).set('loading', false);
    case LOAD_ACTIVITY_DATA_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
