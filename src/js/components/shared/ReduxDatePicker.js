import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';

const ReduxDatePicker = ({ input, dateFormat, ...rest }) => (
  <DatePicker
    value={input.value}
    onChange={input.onChange}
    format={dateFormat}
    {...rest}
  />
);

ReduxDatePicker.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  dateFormat: PropTypes.string,
};

export default ReduxDatePicker;
