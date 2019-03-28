import { churchManagementRelationship } from '../friendApplication';

const requiredMessage = 'Обов\'язкове поле';

const otherChurchManagementRelationship = get =>
  get('churchManagementRelationship') === churchManagementRelationship.other;

const involvedInChurch = get => get('involvedInChurch');

const fields = [
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
    name: 'areasThatNeedDevelopment',
    required: requiredMessage,
  },
  {
    name: 'churchMinistryArea',
    required: requiredMessage,
    when: involvedInChurch,
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
    name: 'whyBanThisStudent',
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
    name: 'phone',
    required: requiredMessage,
  },
  {
    name: 'email',
    required: requiredMessage,
  },
];

export default fields;
