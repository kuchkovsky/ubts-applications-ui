import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import Field from './Field';
import Traits from './Traits';
import { deriveShortAnswer } from '../../schemas';

const PastorFeedback = ({ classes, student: { pastorFeedback: feedback }, student }) => (
  <section className={classes.cardSection}>
    <Paper className={classes.paper}>
      <Title>
        Анкета пастора
      </Title>
      <Field
        name="З якого року абітурієнт є членом Вашої помісної церкви"
        text={feedback.howLongIsChurchMember}
      />
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
        name="Наскільки абітурієнт залучений у діяльність Вашої церкви"
        text={feedback.churchParticipationLevel}
      />
      <Field
        name="Яке служіння і як довго звершує абітурієнт це служіння"
        text={feedback.churchMinistryTypeAndTerm}
      />
      <Field
        name="На вашу думку, чи проявляє абітурієнт які-небудь виняткові здібності або таланти"
        text={feedback.extraordinaryTalents}
      />
      <Field
        name="Чи є у нього які-небудь якості (звички), які не відповідають біблійним принципам"
        text={feedback.nonCanonicalHabits}
      />
      <Field
        name="Який духовний вплив абітурієнт має на Вашу церкву"
        text={feedback.spiritualInfluence}
      />
      <Field
        name="Як до абітурієнта відносяться його друзі та церква"
        text={feedback.friendsAndChurchAttitude}
      />
      <Field
        name="Які взаємостосунки з керівництвом церкви"
        text={feedback.churchManagementRelationship}
      />
      <Field
        name="Які особливі обставини можуть позитивно або негативно вплинути на навчання та служіння абітурієнта"
        text={feedback.possibleNegativeSpecialCircumstances}
      />
      <Field
        name="Що ви очікуєте від абітурієнта під час навчання та після"
        text={feedback.studyExpectations}
      />
      <Field
        name="Чи може ваша церква вносити пожертвування за навчання студента"
        text={feedback.donationInfo}
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
        name="Чи погоджуєтеся Ви один раз в році провести спеціальну зустріч"
        text={ deriveShortAnswer(feedback.readyForSpecialMeeting) }
      />
      <Field
        name="Назва церкви"
        text={feedback.churchName}
      />
      <Field
        name="Адреса церкви"
        text={feedback.churchAddress}
      />
      <Field
        name="Телефон"
        text={feedback.churchPhone}
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
        name="E-mail"
        text={feedback.email}
      />
      <Field
        name="Ви б хотіли отримати більше інформації про УБТС"
        text={ deriveShortAnswer(feedback.readyForMoreInformation) }
      />
      <Traits studentTraits={student.pastorFeedback.studentTraits} classes={classes}/>
    </Paper>
  </section>
);

PastorFeedback.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object,
};

export default PastorFeedback;
