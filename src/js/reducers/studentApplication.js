import { fromJS } from 'immutable';
import dayjs from 'dayjs';
import * as actions from '../actions/studentApplication';
import {
  programs,
  education,
  maritalStatus,
  churchMembersNumber,
  churchMinistryType,
  healthStatus as healthStatusSchema,
  howFindOut as howFindOutSchema,
} from '../schemas/studentApplication';

const today = dayjs();

const initialState = fromJS({
  student: {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    birthDate: today,
    phone1: undefined,
    phone2: undefined,
    email: undefined,
    hasJob: true,
    job: undefined,
    residence: {
      country: undefined,
      region: undefined,
      cityVillage: undefined,
      index: undefined,
      district: undefined,
      street: undefined,
      house: undefined,
      apartment: undefined,
    },
    education: education.secondaryEducation,
    maritalData: {
      status: maritalStatus.notMarried,
      spouseName: undefined,
      marriageDate: today,
      isSpouseChurchMember: true,
      spouseChurchMinistry: undefined,
      childrenNumber: 0,
      isSpouseApproveSeminary: true,
    },
    churchMember: true,
    churchData: {
      name: undefined,
      pastorName: undefined,
      union: undefined,
      denomination: undefined,
      membersNumber: churchMembersNumber.lessThen10,
      region: undefined,
      cityVillage: undefined,
      index: undefined,
      district: undefined,
      streetAndHouseNumber: undefined,
      phone: undefined,
    },
    churchMinistry: {
      repented: true,
      repentanceDate: today,
      baptismDate: today,
      type: churchMinistryType.pastor,
      ordinationDate: today,
      churchParticipation: undefined,
    },
    program: {
      name: programs.pastorMinistry.name,
      info: undefined,
      abbreviation: undefined,
    },
    entryYear: today.year(),
    financeComments: undefined,
    healthData: {
      hadDrugOrAlcoholAddiction: true,
      hadGamblingOrComputerAddiction: true,
      hadOccultAddiction: true,
      healthStatus: healthStatusSchema.excellent,
      isTakingMedicine: true,
      hasStudyProblems: true,
    },
    reasonsToStudy: undefined,
    studyExpectations: undefined,
    howCameToGod: undefined,
    howFindOut: howFindOutSchema.leader,
    files: {
      photo: undefined,
      passport1: undefined,
      passport2: undefined,
      passport3: undefined,
      idNumber: undefined,
      diploma: undefined,
      supplement1: undefined,
      supplement2: undefined,
      medicalReference1: undefined,
      medicalReference2: undefined,
    },
    agree: false,
  },
  upload: {
    pending: false,
    error: false,
    errorMessage: '',
  },
  showUploadSuccessAlert: false,
  uuid: undefined,
});


const studentApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.STUDENT_APPLICATION_RESET:
    return state.set('student', initialState.get('student'));

  case actions.STUDENT_APPLICATION_UPLOADING:
    return state
      .set('student', action.payload)
      .mergeIn(['upload'], fromJS({ pending: true, error: false, errorMessage: '' }));

  case actions.STUDENT_APPLICATION_UPLOADED:
    return state.setIn(['upload', 'pending'], false);

  case actions.STUDENT_APPLICATION_UPLOAD_ERROR:
    return state.mergeIn(['upload'], fromJS({ pending: false, error: true, errorMessage: action.payload }));

  case actions.STUDENT_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT:
    return state.set('showUploadSuccessAlert', true)
      .set('uuid', action.payload);

  case actions.STUDENT_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT:
    return state.set('showUploadSuccessAlert', false);

  default:
    return state;
  }
};

export default studentApplicationReducer;
