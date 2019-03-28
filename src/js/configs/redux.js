import { reducer as formReducer } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import authReducer from '../reducers/auth';
import studentApplicationReducer from '../reducers/studentApplication';
import pastorApplicationReducer from '../reducers/pastorApplication';
import friendApplicationReducer from '../reducers/friendApplication';
import studentListReducer from '../reducers/studentList';
import studentViewerReducer from '../reducers/studentViewer';

const reducer = combineReducers({
  root: rootReducer,
  auth: authReducer,
  studentApplication: studentApplicationReducer,
  pastorApplication: pastorApplicationReducer,
  friendApplication: friendApplicationReducer,
  studentList: studentListReducer,
  studentViewer: studentViewerReducer,
  form: formReducer,
});

// eslint-disable-next-line
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(thunk)),
);

export default store;
