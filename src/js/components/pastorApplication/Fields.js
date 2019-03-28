import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import ReduxRadioGroup from '../shared/ReduxRadioGroup';
import { renderRadiosFromSchema } from '../../utils/render';
import {
  howWellKnowStudent,
  churchParticipation,
  spiritualInfluence as spiritualInfluenceSchema,
  churchManagementRelationship as churchManagementRelationshipSchema,
  personalRecommendation,
} from '../../schemas/pastorApplication';
import QuestionField from '../shared/QuestionField';
import Traits from '../shared/feedback/Traits';
import ReduxBooleanRadioGroup from '../shared/ReduxBooleanRadioGroup';

const Fields = ({
  classes,
  churchParticipationLevel,
  spiritualInfluence,
  churchManagementRelationship,
}) => (
  <section className={classes.section}>
    <Typography variant="h5" className={classes.sectionTitle}>
      Список питань
    </Typography>

    <Typography variant="subtitle1" className={classes.question}>
      З якого року абітурієнт є членом Вашої помісної церкви?
    </Typography>
    <QuestionField name="howLongIsChurchMember"/>

    <Typography variant="subtitle1" className={classes.question}>
      Як довго ви знайомі з абітурієнтом?
    </Typography>
    <QuestionField name="howLongKnowEachOther"/>

    <Typography variant="subtitle1" className={classes.question}>
      Як добре ви знаєте абітурієнта?
    </Typography>
    <Field name="howWellKnowStudent" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(howWellKnowStudent) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      На вашу думку, чи є у абітурієнта особисте посвячення Ісусу Христу,
      і як він його проявляє в житті?
    </Typography>
    <QuestionField name="jesusDedication" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Які сильні сторони абітурієнта Ви могли б назвати?
    </Typography>
    <QuestionField name="strongCharacterTraits" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Наскільки абітурієнт залучений у діяльність Вашої церкви?
    </Typography>
    <Field name="churchParticipationLevel" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(churchParticipation) }
    </Field>
    <Collapse in={churchParticipationLevel === churchParticipation.other}>
      <QuestionField name="otherChurchParticipation" label="Як саме? *"/>
    </Collapse>

    <Typography variant="subtitle1" className={classes.question}>
      Яке служіння і як довго звершує абітурієнт це служіння?
    </Typography>
    <QuestionField name="churchMinistryTypeAndTerm" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      На вашу думку, чи проявляє абітурієнт які-небудь виняткові здібності або таланти?
    </Typography>
    <QuestionField name="extraordinaryTalents" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Чи є у нього які-небудь якості (звички), які не відповідають біблійним принципам?
    </Typography>
    <QuestionField name="nonCanonicalHabits" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Який духовний вплив абітурієнт має на Вашу церкву?
    </Typography>
    <Field name="spiritualInfluence" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(spiritualInfluenceSchema) }
    </Field>
    <Collapse in={spiritualInfluence === spiritualInfluenceSchema.other}>
      <QuestionField name="otherSpiritualInfluence" label="Який саме? *"/>
    </Collapse>

    <Typography variant="subtitle1" className={classes.question}>
      Як до абітурієнта відносяться його друзі та церква?
    </Typography>
    <QuestionField name="friendsAndChurchAttitude" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Які взаємостосунки з керівництвом церкви?
    </Typography>
    <Field name="churchManagementRelationship" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(churchManagementRelationshipSchema) }
    </Field>
    <Collapse in={churchManagementRelationship === churchManagementRelationshipSchema.other}>
      <QuestionField name="otherChurchManagementRelationship" label="Які саме? *"/>
    </Collapse>

    <Typography variant="subtitle1" className={classes.question}>
      Які особливі обставини можуть позитивно або негативно вплинути на навчання
      та служіння абітурієнта?
    </Typography>
    <QuestionField name="possibleNegativeSpecialCircumstances" multiline/>

    <Traits classes={classes}/>

    <Typography variant="subtitle1" className={classes.question}>
      Що ви очікуєте від абітурієнта під час навчання та після?
    </Typography>
    <QuestionField name="studyExpectations" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Чи може ваша церква вносити пожертвування за навчання студента?
      Якщо &quot;так&quot;, то яку суму ви можете вносити?
    </Typography>
    <QuestionField name="donationInfo"/>

    <Typography variant="subtitle1" className={classes.question}>
      Ваша рекомендація для приймальної комісії:
    </Typography>
    <Field name="personalRecommendation" component={ReduxRadioGroup}>
      { renderRadiosFromSchema(personalRecommendation) }
    </Field>

    <Typography variant="subtitle1" className={classes.question}>
      Чому ми повинні прийняти/не прийняти на навчання цього брата/сестру?
    </Typography>
    <QuestionField name="whyBanThisStudent" multiline/>

    <Typography variant="subtitle1" className={classes.question}>
      Чи погоджуєтеся Ви один раз в році провести спеціальну зустріч зі
      студентом для обговорення його служіння в помісній церкві
      в контексті семінарського навчання?
    </Typography>
    <ReduxBooleanRadioGroup name="readyForSpecialMeeting"/>

    <QuestionField name="churchName" label="Назва церкви *"/>
    <QuestionField name="churchAddress" label="Адреса церкви *"/>
    <QuestionField name="churchPhone" label="Телефон *"/>

    <QuestionField name="name" label="Ваше П.І.Б. *"/>
    <QuestionField name="position" label="Посада/служіння *"/>
    <QuestionField name="address" label="Адреса *"/>
    <QuestionField name="email" label="E-mail *"/>

    <Typography variant="subtitle1" className={classes.question}>
      Ви б хотіли отримати більше інформації про УБТС?
    </Typography>
    <ReduxBooleanRadioGroup name="readyForMoreInformation"/>
  </section>
);

Fields.propTypes = {
  classes: PropTypes.object.isRequired,
  churchParticipationLevel: PropTypes.string,
  spiritualInfluence: PropTypes.string,
  churchManagementRelationship: PropTypes.string,
};

export default Fields;
