import {
  maritalStatus,
  churchMinistryType,
  howFindOut,
} from '../studentApplication';
import { allOf } from '../../utils/functions';

const married = get => get('maritalData.status') === maritalStatus.married;
const spouseChurchMember = get => get('maritalData.isSpouseChurchMember');
const churchMember = get => get('churchMember');
const otherChurchMinistryType = get => get('churchMinistry.type') === churchMinistryType.other;
const hasJob = get => get('hasJob');
const otherHowFindOut = get => get('howFindOut') === howFindOut.other;

const requiredMessage = 'Обов\'язкове поле';

const fields = [
  {
    name: 'lastName',
    required: requiredMessage,
  },
  {
    name: 'firstName',
    required: requiredMessage,
  },
  {
    name: 'middleName',
    required: requiredMessage,
  },
  {
    name: 'internationalFirstName',
    required: requiredMessage,
  },
  {
    name: 'internationalLastName',
    required: requiredMessage,
  },
  {
    name: 'birthDate',
    required: requiredMessage,
  },
  {
    name: 'phone1',
    required: requiredMessage,
  },
  {
    name: 'email',
    required: requiredMessage,
    regex: ['^\\S+@\\S+\\.\\S+$', 'Неправильний формат електронної пошти'],
  },
  {
    name: 'residence.country',
    required: requiredMessage,
  },
  {
    name: 'residence.region',
    required: requiredMessage,
  },
  {
    name: 'residence.cityVillage',
    required: requiredMessage,
  },
  {
    name: 'residence.index',
    required: requiredMessage,
  },
  {
    name: 'residence.district',
  },
  {
    name: 'residence.street',
    required: requiredMessage,
  },
  {
    name: 'residence.house',
    required: requiredMessage,
  },
  {
    name: 'maritalData.spouseName',
    required: requiredMessage,
    when: married,
  },
  {
    name: 'maritalData.spouseChurchMinistry',
    required: requiredMessage,
    when: allOf(married, spouseChurchMember),
  },
  {
    name: 'churchData.name',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.pastorName',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.union',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.denomination',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.region',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.cityVillage',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.index',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchData.district',
    when: churchMember,
  },
  {
    name: 'churchData.streetAndHouseNumber',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'churchMinistry.otherType',
    required: requiredMessage,
    when: allOf(churchMember, otherChurchMinistryType),
  },
  {
    name: 'churchMinistry.churchParticipation',
    required: requiredMessage,
    when: churchMember,
  },
  {
    name: 'job',
    required: requiredMessage,
    when: hasJob,
  },
  {
    name: 'reasonsToStudy',
    required: requiredMessage,
  },
  {
    name: 'studyExpectations',
    required: requiredMessage,
  },
  {
    name: 'howCameToGod',
    required: requiredMessage,
  },
  {
    name: 'mostDifficultBibleTheme',
    required: requiredMessage,
  },
  {
    name: 'answers',
    required: requiredMessage,
  },
  {
    name: 'lastVerseFromBible',
    required: requiredMessage,
  },
  {
    name: 'lastInterestingPreaching',
    required: requiredMessage,
  },
  {
    name: 'didYouReadBible',
    required: requiredMessage,
  },
  {
    name: 'prayForSomeone',
    required: requiredMessage,
  },
  {
    name: 'missions',
    required: requiredMessage,
  },
  {
    name: 'whenYouToldAboutChrist',
    required: requiredMessage,
  },
  {
    name: 'spiritGifts',
    required: requiredMessage,
  },
  {
    name: 'bestInChurch',
    required: requiredMessage,
  },
  {
    name: 'mentor',
    required: requiredMessage,
  },
  {
    name: 'mainInfluencer',
    required: requiredMessage,
  },
  {
    name: 'testScore',
    required: requiredMessage,
  },
  {
    name: 'testTime',
    required: requiredMessage,
  },
  {
    name: 'files.photo',
    required: requiredMessage,
  },
  {
    name: 'files.passport1',
    required: requiredMessage,
  },
  {
    name: 'files.passport2',
    required: requiredMessage,
  },
  {
    name: 'files.passport3',
    required: requiredMessage,
  },
  {
    name: 'files.idNumber',
    required: requiredMessage,
  },
  {
    name: 'files.diploma',
    required: requiredMessage,
  },
  {
    name: 'files.supplement1',
    required: requiredMessage,
  },
  {
    name: 'files.supplement2',
    required: requiredMessage,
  },
  {
    name: 'files.medicalReference1',
    required: requiredMessage,
  },
  {
    name: 'files.medicalReference2',
    required: requiredMessage,
  },
  {
    name: 'agree',
    required: requiredMessage,
  },
];

export default fields;
