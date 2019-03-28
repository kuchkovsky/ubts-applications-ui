import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';
import { deriveShortAnswer } from '../../schemas';

const ChurchData = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Інформація про церкву та служіння
    </Typography>
    { !student.churchData &&
      <Field name="Статус" text="Не є членом церкви"/> }
    { student.churchData &&
      <React.Fragment>
        <Field name="Статус" text="Є членом церкви"/>
        <div>
          <Typography variant="subtitle1" className={classes.sectionSubtitle} gutterBottom>
            Дані про церкву, членом якої є абітурієнт
          </Typography>
          <Field name="Повна назва церкви" text={student.churchData.name}/>
          <Field name="П.І.Б. пастора" text={student.churchData.pastorName}/>
          <Field name="Союз чи об'єднання, в яке входить церква" text={student.churchData.union}/>
          <Field name="Деномінація" text={student.churchData.denomination}/>
          <Field name="Кількість членів" text={student.churchData.membersNumber}/>
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.sectionSubtitle} gutterBottom>
            Адреса церкви
          </Typography>
          <Field name="Область" text={student.churchData.region}/>
          <Field name="Місто/село" text={student.churchData.cityVillage}/>
          <Field name="Індекс" text={student.churchData.index}/>
          <Field name="Район" text={student.churchData.district}/>
          <Field name="Вулиця, номер будинку" text={student.churchData.streetAndHouseNumber}/>
          { student.churchData.phone &&
            <Field name="Телефон" text={student.churchData.phone}/> }
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.sectionSubtitle} gutterBottom>
            Інформація про служіння
          </Typography>
          <Field name="Рік покаяння" text={student.churchMinistry.repentanceDate}/>
          <Field name="Рік хрещення" text={student.churchMinistry.baptismDate}/>
          <Field name="Яке служіння звершує" text={student.churchMinistry.type}/>
          <Field name="Рукопокладений служитель" text={ deriveShortAnswer(!!student.churchMinistry.ordinationDate) }/>
          { student.churchMinistry.ordinationDate &&
            <Field name="Рік рукопокладання" text={ student.churchMinistry.ordinationDate }/> }
          <Field name="Участь у житті помісної церкви" text={ student.churchMinistry.churchParticipation }/>
        </div>
      </React.Fragment> }
  </section>
);

ChurchData.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default ChurchData;
