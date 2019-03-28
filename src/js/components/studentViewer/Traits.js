import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Field from './Field';

const Traits = ({ classes, studentTraits }) => (
  <section className={classes.cardSubsection}>
    <Typography variant="h5" className={classes.sectionTitle} gutterBottom>
      Особисті якості
    </Typography>
    <Field
      name="Повага до старших, до керівництва"
      text={studentTraits.respectForElderly}
    />
    <Field
      name="Чесність і відкритість"
      text={studentTraits.honestyAndOpenness}
    />
    <Field
      name="Доброзичливість"
      text={studentTraits.goodwill}
    />
    <Field
      name="Вразливість"
      text={studentTraits.vulnerability}
    />
    <Field
      name="Відповідальність у служінні"
      text={studentTraits.ministryResponsibility}
    />
    <Field
      name="Бажання чинити все по-своєму"
      text={studentTraits.doOwnWayDesire}
    />
    <Field
      name="Доводить розпочату справу до кінця"
      text={studentTraits.completesTheBusiness}
    />
    <Field
      name="Поважає думки інших"
      text={studentTraits.respectOthersOpinions}
    />
    <Field
      name="Негативно реагує на зауваження"
      text={studentTraits.negativeFeedbackReaction}
    />
    <Field
      name="Здібність навчати інших"
      text={studentTraits.teachOthers}
    />
    <Field
      name="Здібність вести за собою інших"
      text={studentTraits.leadOthers}
    />
    <Field
      name="Охайність"
      text={studentTraits.neatness}
    />
    <Field
      name="Рівень загальних знань"
      text={studentTraits.generalKnowledge}
    />
    <Field
      name="Зрілість в розпорядженні фінансами"
      text={studentTraits.financeSkill}
    />
    <Field
      name="Мудрість в управлінні сім'єю"
      text={studentTraits.familyManagementSkill}
    />
    <Field
      name="Здатність набувати друзів"
      text={studentTraits.getNewFriendsSkill}
    />
    { studentTraits.emotionalStability &&
      <Field
        name="Емоційна стабільність"
        text={studentTraits.emotionalStability}
      />}
  </section>
);

Traits.propTypes = {
  classes: PropTypes.object.isRequired,
  studentTraits: PropTypes.object,
};

export default Traits;
