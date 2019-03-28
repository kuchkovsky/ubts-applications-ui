import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import Field from './Field';
import Traits from './Traits';
import { deriveShortAnswer } from '../../schemas';

const FriendFeedback = ({ classes, feedback }) => (
  <section className={classes.cardSection}>
    <Paper className={classes.paper}>
      <Title>
        Анкета друга
      </Title>
      <Field
        name="Як довго ви знайомі з абітурієнтом"
        text={feedback.howLongKnowEachOther}
      />
      <Field
        name="Як добре ви знаєте абітурієнта"
        text={feedback.howWellKnowStudent}
      />
      <Field
        name="На вашу думку, чи є у абітурієнта особисте посвячення Ісусу Христу, і як він його проявляє в житті"
        text={feedback.jesusDedication}
      />
      <Field
        name="Які сильні сторони абітурієнта Ви могли б назвати"
        text={feedback.strongCharacterTraits}
      />
      <Field
        name="В яких сферах, на вашу думку, йому/їй необхідний розвиток"
        text={feedback.areasThatNeedDevelopment}
      />
      <Field
        name="Чи залучений абітурієнт в життя церкви"
        text={ deriveShortAnswer(!!feedback.churchMinistryArea) }
      />
      { feedback.churchMinistryArea &&
        <Field
          name="В яких сферах абітурієнт залучений в життя церкви"
          text={feedback.churchMinistryArea}
        /> }
      <Field
        name="На вашу думку, чи проявляє абітурієнт які-небудь виняткові здібності або таланти"
        text={feedback.extraordinaryTalents}
      />
      <Field
        name="Чи є у нього які-небудь якості (звички), які не відповідають біблійним принципам"
        text={feedback.nonCanonicalHabits}
      />
      <Field
        name="Як до абітурієнта відносяться його друзі та церква"
        text={feedback.friendsAndChurchAttitude}
      />
      { feedback.churchManagementRelationship &&
        <Field
          name="Які взаємостосунки з керівництвом церкви"
          text={feedback.churchManagementRelationship}
        /> }
      <Field
        name="Які особливі обставини можуть позитивно або негативно вплинути на навчання та служіння абітурієнта"
        text={feedback.possibleNegativeSpecialCircumstances}
      />
      <Field
        name="Ваша рекомендація для приймальної комісії"
        text={feedback.personalRecommendation}
      />
      <Field
        name="Чому ми повинні прийняти/не прийняти на навчання цього брата/сестру"
        text={feedback.whyBanThisStudent}
      />
      <Field
        name="Ваше П.І.Б."
        text={feedback.name}
      />
      <Field
        name="Посада/служіння"
        text={feedback.position}
      />
      <Field
        name="Адреса"
        text={feedback.address}
      />
      <Field
        name="Телефон"
        text={feedback.phone}
      />
      <Field
        name="E-mail"
        text={feedback.email}
      />
      <Field
        name="Ви б хотіли отримати більше інформації про УБТС"
        text={ deriveShortAnswer(feedback.readyForMoreInformation) }
      />
      <Traits studentTraits={feedback.studentTraits} classes={classes}/>
    </Paper>
  </section>
);

FriendFeedback.propTypes = {
  classes: PropTypes.object.isRequired,
  feedback: PropTypes.object,
};

export default FriendFeedback;
