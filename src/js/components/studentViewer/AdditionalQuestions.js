import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const AdditionalQuestions = ({ classes, student }) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Додаткові запитання
    </Typography>
    <Field name="Статус" text={student.job ? 'Працює' : 'Не працює'}/>
    { (student.reasonsToStudy && !student.studyExpectations) &&
      <Field
        name="Причини, які спонукали до навчання у семінарії. Очікування від навчання"
        text={student.reasonsToStudy}/> }
    { (student.reasonsToStudy && student.studyExpectations) &&
      <React.Fragment>
        <Field
          name="Причини, які спонукали до навчання у семінарії"
          text={student.reasonsToStudy}/>
        <Field
          name="Очікування від навчання"
          text={student.studyExpectations}/>
      </React.Fragment> }
    <Field
      name="Як прийшов до Бога; етапи духовного становлення та стосунки з Богом на даний момент"
      text={student.howCameToGod}/>
    <Field
      name="Яка богословська тема (теми) є найбільш складною (складними) для вашого розуміння?"
      text={student.mostDifficultBibleTheme}/>
    <Field
      name="На які біблійно-богословські запитання або теми ви хотіли отримати відповіді під час навчання?"
      text={student.answers}/>
    <Field
      name="Який останній текст Біблії торкнувся вас особисто і чому?"
      text={student.lastVerseFromBible}/>
    <Field
      name="Яка остання проповідь на вас вплинула і чому?"
      text={student.lastInterestingPreaching}/>
    <Field
      name="Чи прочитали ви Біблію повністю?"
      text={student.didYouReadBible}/>
    <Field
      name="Чи є серед вашого оточення неспасенна людина, за яку ви постійно молитесь?"
      text={student.prayForSomeone}/>
    <Field
      name="В яких місіонерських, євангелізаційних проектах-служіннях ви приймали участь протягом останніх двох років? Коротко опишіть вашу працю"
      text={student.missions}/>
    <Field
      name="Коли останній раз ви розповідали комусь про Христа, і де це було?"
      text={student.whenYouToldAboutChrist}/>
    <Field
      name="Чи знаєте ви свої духовні дари?"
      text={student.spiritGifts}/>
    <Field
      name="Що у вас найкраще виходить в церковному служінні?"
      text={student.bestInChurch}/>
    <Field
      name="Чи є у вас наставник, з яким ви можете щиро поспілкуватись? Хто це?"
      text={student.mentor}/>
    <Field
      name="Хто найбільше вплинув на ваше духовне формування? Яким чином?"
      text={student.mainInfluencer}/>
  </section>
);

AdditionalQuestions.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default AdditionalQuestions;
