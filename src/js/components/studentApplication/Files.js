import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
import ReduxFilePicker from '../shared/ReduxFilePicker';
import { STUDENT_FILES } from '../../utils/apiEndpoints';
import { files } from '../../schemas/studentApplication';

const documentFileTypes = ['image/jpeg', 'image/png', 'application/pdf'];
const studentFilesUrl = `${process.env.API_URL}${STUDENT_FILES}`;

const Files = props => {
  const { classes } = props;
  return (
    <section className={classes.section}>
      <Typography variant="h5" className={classes.sectionSubtitle}>
        Файли
      </Typography>
      <Typography variant="body2" className={classes.sectionSubtext} gutterBottom>
        Ви можете завантажити лише файли таких форматів: JPG, JPEG, PNG та PDF.
        Максимальний розмір одного файлу - 5МБ
      </Typography>
      { Object.keys(files).map(key => (
        <Field
          name={`files.${key}`}
          label={files[key].label}
          comment={files[key].comment}
          serverUrl={studentFilesUrl}
          acceptedFileTypes={documentFileTypes}
          imagePreviewHeight={500}
          maxFileSize="5MB"
          component={ReduxFilePicker}
          key={key}
        />
      )) }
    </section>
  );
};

Files.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Files;
