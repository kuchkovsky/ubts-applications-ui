import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import viewerStyles from '../../styles/viewer';
import Student from './Student';
import PastorFeedback from './PastorFeedback';
import FriendFeedback from './FriendFeedback';

const StudentViewer = props => {
  const { classes, student, loadStudent, loadStudentPhoto } = props;
  const { id: studentId } = props.match.params;

  useEffect(() => {
    if (!student || student.id !== studentId) {
      loadStudent(studentId);
      loadStudentPhoto(studentId);
    }
  }, []);

  return (
    <main className={classes.main}>
      { student &&
        <React.Fragment>
          <Student {...props}/>
          { student.pastorFeedback &&
            <PastorFeedback {...props}/> }
          { student.friendFeedback1 &&
            <FriendFeedback feedback={student.friendFeedback1} classes={classes}/> }
          { student.friendFeedback2 &&
            <FriendFeedback feedback={student.friendFeedback2} classes={classes}/> }
        </React.Fragment> }
    </main>
  );
};

StudentViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  student: PropTypes.object,
  loadStudent: PropTypes.func.isRequired,
  loadStudentPhoto: PropTypes.func.isRequired,
};

export default withStyles(viewerStyles())(StudentViewer);
