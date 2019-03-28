import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form/immutable';
import { validateForm } from '../../utils/reduxForm';
import Form from '../../components/pastorApplication/Form';
import fields from '../../schemas/validation/pastorApplication';

export const formName = 'PastorApplicationForm';

const ReduxForm = reduxForm({
  form: formName,
  validate: validateForm(fields),
  enableReinitialize: true,
})(Form);

const selector = formValueSelector(formName);

const SelectorForm = connect(
  state => ({
    churchParticipationLevel: selector(state, 'churchParticipationLevel'),
    spiritualInfluence: selector(state, 'spiritualInfluence'),
    churchManagementRelationship: selector(state, 'churchManagementRelationship'),
  }),
)(ReduxForm);

export default SelectorForm;
