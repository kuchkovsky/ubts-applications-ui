import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';

const ReduxSelect = ({ input, label, labelWidth = 0, children, ...rest }) => (
  <FormControl variant="outlined">
    <InputLabel>{ label }</InputLabel>
    <Select
      input={
        <OutlinedInput labelWidth={labelWidth}/>
      }
      {...input}
      {...rest}
    >
      { children }
    </Select>
  </FormControl>
);

ReduxSelect.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  labelWidth: PropTypes.number,
  children: PropTypes.array.isRequired,
};

export default ReduxSelect;
