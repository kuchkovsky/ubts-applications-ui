import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

const ReduxRadioGroup = ({ input, children, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      { children }
    </RadioGroup>
  </FormControl>
);

ReduxRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

export default ReduxRadioGroup;
