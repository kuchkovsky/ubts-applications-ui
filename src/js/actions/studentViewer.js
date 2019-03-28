import axios from 'axios';
import { createAction } from 'redux-actions';
import { STUDENTS, FILE_DOWNLOAD_TOKEN, STUDENT_FILES, PHOTO } from '../utils/apiEndpoints';
import { loadMainContent } from './index';
import { toDataUrl } from '../utils/files';

export const STUDENT_VIEWER_STUDENT_LOADED = 'STUDENT_VIEWER_STUDENT_LOADED';
export const studentLoaded = createAction(STUDENT_VIEWER_STUDENT_LOADED);

export const STUDENT_VIEWER_STUDENT_PHOTO_LOADED = 'STUDENT_VIEWER_STUDENT_PHOTO_LOADED';
export const studentPhotoLoaded = createAction(STUDENT_VIEWER_STUDENT_PHOTO_LOADED);

export const STUDENT_VIEWER_RESET_STUDENT_PHOTO = 'STUDENT_VIEWER_RESET_STUDENT_PHOTO';
export const resetStudentPhoto = createAction(STUDENT_VIEWER_RESET_STUDENT_PHOTO);

export const loadStudent = id =>
  dispatch =>
    dispatch(loadMainContent(`${STUDENTS}/${id}`, studentLoaded));

const photoPath = `${process.env.API_URL}${STUDENT_FILES}/${PHOTO}`;

export const loadStudentPhoto = id =>
  dispatch => {
    dispatch(resetStudentPhoto());
    axios.get(`${FILE_DOWNLOAD_TOKEN}/${id}`)
      .then(response => {
        const url = `${photoPath}/${id}?token=${response.data.token}`;
        axios.get(url, { responseType: 'blob' })
          .then(photoResponse =>
            toDataUrl(photoResponse.data).then(photo =>
              dispatch(studentPhotoLoaded(photo))));
      });
  };
