import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Typography from '@material-ui/core/Typography';
import Field from './Field';
import { maritalStatus } from '../../schemas/studentApplication';
import { DATE_FORMAT } from '../../utils/form';
import { deriveShortAnswer } from '../../schemas';

const MaritalData = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Сімейний стан
    </Typography>
    <Field name="Статус" text={student.maritalData.status}/>
    { student.maritalData.status === maritalStatus.married &&
      <React.Fragment>
        <Field
          name="П.І.Б. дружини/чоловіка"
          text={student.maritalData.spouseName}
        />
        <Field
          name="Дата реєстрації шлюбу"
          text={ dayjs(student.maritalData.marriageDate).format(DATE_FORMAT) }
        />
        <Field
          name="Чи є дружина/чоловік членом церкви"
          text={ deriveShortAnswer(student.maritalData.isSpouseChurchMember) }
        />
        <Field
          name="Яке служіння звершує церкві"
          text={student.maritalData.spouseChurchMinistry}
        />
        <Field
          name="Кількість дітей"
          text={student.maritalData.childrenNumber}
        />
        <Field
          name="Чи підтримує дружина/чоловік бажання навчатися в семінарії"
          text={ deriveShortAnswer(student.maritalData.isSpouseApproveSeminary) }
        />
      </React.Fragment> }
  </section>
);

MaritalData.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default MaritalData;
