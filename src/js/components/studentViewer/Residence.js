import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const Residence = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Адреса фактичного місця проживання
    </Typography>
    <Field name="Країна" text={student.residence.country}/>
    <Field name="Область" text={student.residence.region}/>
    <Field name="Місто/село" text={student.residence.cityVillage}/>
    <Field name="Індекс" text={student.residence.index}/>
    <Field name="Район" text={student.residence.district}/>
    <Field name="Вулиця" text={student.residence.street}/>
    <Field name="Номер будинку" text={student.residence.house}/>
    { student.residence.apartment &&
      <Field name="Номер квартири" text={student.residence.apartment}/> }
  </section>
);

Residence.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default Residence;
