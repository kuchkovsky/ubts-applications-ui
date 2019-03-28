import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const ReduxRadioButton = ({ value, label, ...rest }) => (
  <FormControlLabel
    control={
      <Radio
        value={value}
        onChange={rest.onChange}
      />
    }
    label={label || value}
    {...rest}/>
);

ReduxRadioButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  label: PropTypes.string,
};

export default ReduxRadioButton;
