import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { shortAnswers } from '../../schemas/index';
import { renderRadiosFromKeyValueSchema } from '../../utils/render';
import ReduxRadioGroup from './ReduxRadioGroup';

const booleanNormalizer = val => val === 'true';

const ReduxBooleanRadioGroup = ({ name, ...rest }) => (
  <Field
    name={name}
    component={ReduxRadioGroup}
    parse={booleanNormalizer}
    {...rest}
  >
    { renderRadiosFromKeyValueSchema(shortAnswers) }
  </Field>
);

ReduxBooleanRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ReduxBooleanRadioGroup;
