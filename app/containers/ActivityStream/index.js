/**
 *
 * ActivityStream
 *
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import ActivityStreamView from 'components/ActivityStreamView';
import saga from './saga';
import { loadActivityData } from './actions';
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

export default compose(
  withSaga,
  withConnect,
)(ActivityStreamView);
