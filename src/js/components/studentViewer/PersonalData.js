import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Typography from '@material-ui/core/Typography';
import Field from './Field';
import { DATE_FORMAT } from '../../utils/form';

const PersonalData = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Особисті дані
    </Typography>
    <Field name="Прізвище" text={student.lastName}/>
    <Field name="Ім'я" text={student.firstName}/>
    <Field name="По батькові" text={student.middleName}/>
    <Field name="Дата народження" text={ dayjs(student.birthDate).format(DATE_FORMAT) }/>
    <Field name="Телефон 1" text={student.phone1}/>
    { student.phone2 &&
      <Field name="Телефон 2" text={student.phone2}/> }
    <Field name="Email" text={student.email}/>
    <Field name="Міжнародне ім'я" text={student.internationalFirstName}/>
    <Field name="Міжнародне прізвище" text={student.internationalLastName}/>
  </section>
);

PersonalData.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default PersonalData;
