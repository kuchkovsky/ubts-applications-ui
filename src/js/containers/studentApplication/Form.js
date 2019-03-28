import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form/immutable';
import { validateForm } from '../../utils/reduxForm';
import Form from '../../components/studentApplication/Form';
import fields from '../../schemas/validation/studentApplication';

export const formName = 'StudentApplicationForm';

const ReduxForm = reduxForm({
  form: formName,
  validate: validateForm(fields),
  enableReinitialize: true,
})(Form);

const selector = formValueSelector(formName);

const SelectorForm = connect(
  state => ({
    programName: selector(state, 'program.name'),
    maritalStatus: selector(state, 'maritalData.status'),
    spouseChurchMember: selector(state, 'maritalData.isSpouseChurchMember'),
    churchMember: selector(state, 'churchMember'),
    churchMinistryType: selector(state, 'churchMinistry.type'),
    repented: selector(state, 'churchMinistry.repented'),
    hasJob: selector(state, 'hasJob'),
    howFindOut: selector(state, 'howFindOut'),
  }),
)(ReduxForm);

export default SelectorForm;
