import { fromJS } from 'immutable';
import * as actions from '../actions/pastorApplication';
import {
  howWellKnowStudent,
  churchParticipation,
  spiritualInfluence,
  churchManagementRelationship,
  personalRecommendation,
} from '../schemas/pastorApplication';
import { percents } from '../schemas';

const initialState = fromJS({
  studentName: undefined,
  pastorFeedback: {
    howLongIsChurchMember: undefined,
    howLongKnowEachOther: undefined,
    howWellKnowStudent: howWellKnowStudent.veryWell,
    jesusDedication: undefined,
    strongCharacterTraits: undefined,
    churchParticipationLevel: churchParticipation.rarely,
    churchMinistryTypeAndTerm: undefined,
    extraordinaryTalents: undefined,
    nonCanonicalHabits: undefined,
    spiritualInfluence: spiritualInfluence.positive,
    friendsAndChurchAttitude: undefined,
    churchManagementRelationship: churchManagementRelationship.wonderful,
    possibleNegativeSpecialCircumstances: undefined,
    studentTraits: {
      respectForElderly: percents.p100,
      honestyAndOpenness: percents.p100,
      goodwill: percents.p100,
      vulnerability: percents.p100,
      ministryResponsibility: percents.p100,
      doOwnWayDesire: percents.p100,
      completesTheBusiness: percents.p100,
      respectOthersOpinions: percents.p100,
      negativeFeedbackReaction: percents.p100,
      teachOthers: percents.p100,
      leadOthers: percents.p100,
      neatness: percents.p100,
      generalKnowledge: percents.p100,
      financeSkill: percents.p100,
      familyManagementSkill: percents.p100,
      getNewFriendsSkill: percents.p100,
    },
    studyExpectations: undefined,
    donationInfo: undefined,
    personalRecommendation: personalRecommendation.recommend,
    whyBanThisStudent: undefined,
    readyForSpecialMeeting: true,
    churchName: undefined,
    churchAddress: undefined,
    churchPhone: undefined,
    name: undefined,
    position: undefined,
    address: undefined,
    email: undefined,
    readyForMoreInformation: true,
  },
  upload: {
    pending: false,
    error: false,
    errorMessage: '',
  },
  showUploadSuccessAlert: false,
});

const pastorApplicationReducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.PASTOR_APPLICATION_STUDENT_NAME_LOADED:
    return state.set('studentName', action.payload);

  case actions.PASTOR_APPLICATION_UPLOADING:
    return state
      .set('pastorFeedback', action.payload)
      .mergeIn(['upload'], fromJS({ pending: true, error: false, errorMessage: '' }));

  case actions.PASTOR_APPLICATION_UPLOADED:
    return state.setIn(['upload', 'pending'], false);

  case actions.PASTOR_APPLICATION_UPLOAD_ERROR:
    return state.mergeIn(['upload'], fromJS({ pending: false, error: true, errorMessage: action.payload }));

  case actions.PASTOR_APPLICATION_SHOW_UPLOAD_SUCCESS_ALERT:
    return state.set('showUploadSuccessAlert', true)
      .set('uuid', action.payload);

  case actions.PASTOR_APPLICATION_HIDE_UPLOAD_SUCCESS_ALERT:
    return state.set('showUploadSuccessAlert', false);

  default:
    return state;
  }
};

export default pastorApplicationReducer;
