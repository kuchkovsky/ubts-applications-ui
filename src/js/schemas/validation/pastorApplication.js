import {
  churchParticipation,
  spiritualInfluence,
  churchManagementRelationship,
} from '../pastorApplication';

const requiredMessage = 'Обов\'язкове поле';

const otherChurchParticipation = get => get('churchParticipationLevel') === churchParticipation.other;

const otherSpiritualInfluence = get => get('spiritualInfluence') === spiritualInfluence.other;

const otherChurchManagementRelationship = get =>
  get('churchManagementRelationship') === churchManagementRelationship.other;

const fields = [
  {
    name: 'howLongIsChurchMember',
    required: requiredMessage,
  },
  {
    name: 'howLongKnowEachOther',
    required: requiredMessage,
  },
  {
    name: 'jesusDedication',
    required: requiredMessage,
  },
  {
    name: 'strongCharacterTraits',
    required: requiredMessage,
  },
  {
    name: 'otherChurchParticipation',
    required: requiredMessage,
    when: otherChurchParticipation,
  },
  {
    name: 'churchMinistryTypeAndTerm',
    required: requiredMessage,
  },
  {
    name: 'extraordinaryTalents',
    required: requiredMessage,
  },
  {
    name: 'nonCanonicalHabits',
    required: requiredMessage,
  },
  {
    name: 'otherSpiritualInfluence',
    required: requiredMessage,
    when: otherSpiritualInfluence,
  },
  {
    name: 'friendsAndChurchAttitude',
    required: requiredMessage,
  },
  {
    name: 'otherChurchManagementRelationship',
    required: requiredMessage,
    when: otherChurchManagementRelationship,
  },
  {
    name: 'possibleNegativeSpecialCircumstances',
    required: requiredMessage,
  },
  {
    name: 'studyExpectations',
    required: requiredMessage,
  },
  {
    name: 'donationInfo',
    required: requiredMessage,
  },
  {
    name: 'whyBanThisStudent',
    required: requiredMessage,
  },
  {
    name: 'churchName',
    required: requiredMessage,
  },
  {
    name: 'churchAddress',
    required: requiredMessage,
  },
  {
    name: 'churchPhone',
    required: requiredMessage,
  },
  {
    name: 'name',
    required: requiredMessage,
  },
  {
    name: 'position',
    required: requiredMessage,
  },
  {
    name: 'address',
    required: requiredMessage,
  },
  {
    name: 'email',
    required: requiredMessage,
  },
];

export default fields;
