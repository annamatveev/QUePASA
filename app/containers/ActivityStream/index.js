/**
 *
 * ActivityStream
 *
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ActivityStreamView from 'components/ActivityStreamView';
import saga from './saga';
import { loadActivityData } from './actions';
import reducer from './reducer';

import {
  makeSelectActivityData,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadActivityData()),
  };
}

const mapStateToProps = createStructuredSelector({
  activities: makeSelectActivityData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'activityStream', saga });
const withReducer = injectReducer({ key: 'activityStream', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ActivityStreamView);
