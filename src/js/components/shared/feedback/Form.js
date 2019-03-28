import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ubtsImg from '../../../../img/ubts.png';

const Form = props => {
  const {
    classes,
    handleSubmit,
    pristine,
    invalid,
  } = props;
  const { headerInfo: HeaderInfo, fields: Fields, ...other } = props;
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <img src={ubtsImg} className={classes.headerImage}/>
      <HeaderInfo {...other}/>
      <Fields {...other}/>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={pristine || invalid}
        className={classes.submit}
      >
        Надіслати
      </Button>
      { (pristine || invalid) &&
        <Typography variant="subtitle2" className={classes.errorMessage}>
          Необхідно заповнити всі обов&#39;язкові (*) поля!
        </Typography> }
    </form>
  );
};

Form.propTypes = {
  headerInfo: PropTypes.func.isRequired,
  fields: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
