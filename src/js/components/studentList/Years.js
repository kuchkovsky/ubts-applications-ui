import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const Years = props => {
  const { classes, years, selectedYears, checkSelectedYear } = props;
  const handleChange = name => event =>
    checkSelectedYear(name, event.target.checked);
  return (
    <div className={classes.filter}>
      <Typography variant="body2">
        Роки:
      </Typography>
      <FormGroup row>
        { years.map(year => (
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedYears.includes(year)}
                onChange={handleChange(year)}
              />
            }
            label={year}
            key={year}
          />
        ))}
      </FormGroup>
    </div>
  );
};

Years.propTypes = {
  classes: PropTypes.object.isRequired,
  years: PropTypes.array,
  selectedYears: PropTypes.array,
  checkSelectedYear: PropTypes.func.isRequired,
};

export default Years;
