import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const Finance = ({ classes, student }) => (
  <React.Fragment>
    { (student.donationAmount || student.financeComments) &&
      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
          Фінанси
        </Typography>
        { student.donationAmount &&
          <Field name="Сума, яку абітурієнт планує жертвувати за сесію (один тиждень)" text={student.donationAmount}/> }
        { student.financeComments &&
          <Field name="Коментарі" text={student.financeComments}/> }
      </section> }
  </React.Fragment>
);

Finance.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default Finance;
