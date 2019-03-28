import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import ReduxTextField from './ReduxTextField';

const QuestionField = ({ name, label, ...other }) => (
  <Field
    name={name}
    label={label || 'Ваша відповідь *'}
    variant="outlined"
    margin="normal"
    fullWidth
    component={ReduxTextField}
    {...other}
  />
);

QuestionField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default QuestionField;
