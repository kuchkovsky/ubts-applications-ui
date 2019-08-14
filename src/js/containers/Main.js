import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import Main from '../components/Main';
import {
  changeServerRegistrationStatus,
} from '../actions/index';
import * as authSelectors from '../selectors/auth';
import { getRegistrationOpened } from '../selectors/index';

const mapStateToProps = state => ({
  admin: authSelectors.getAdmin(state),
  registrationOpened: getRegistrationOpened(state),
});

const mapDispatchToProps = dispatch => ({
  changeRegistrationStatus: open => dispatch(changeServerRegistrationStatus(open)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withImmutablePropsToJS(Main));
