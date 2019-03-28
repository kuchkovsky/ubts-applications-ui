import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form/immutable';
import { validateForm } from '../../utils/reduxForm';
import Form from '../../components/friendApplication/Form';
import fields from '../../schemas/validation/friendApplication';

export const formName = 'FriendApplicationForm';

const ReduxForm = reduxForm({
  form: formName,
  validate: validateForm(fields),
  enableReinitialize: true,
})(Form);

const selector = formValueSelector(formName);

const SelectorForm = connect(
  state => ({
    involvedInChurch: selector(state, 'involvedInChurch'),
    churchManagementRelationship: selector(state, 'churchManagementRelationship'),
  }),
)(ReduxForm);

export default SelectorForm;
