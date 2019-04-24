import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import List from '@material-ui/core/List';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
import Student from './Student';
import Group from './Group';
import { match } from '../../utils/functions';
import EmptyListText from './EmptyListText';
import DeleteAlert from './DeleteAlert';
import DeleteErrorPopup from './DeleteErrorPopup';
import Years from './Years';
import fabStyles from '../../styles/fab';
import ExportDialog from './ExportDialog';

const styles = theme => ({
  card: {
    backgroundColor: theme.palette.background.paper,
  },
  filter: {
    padding: '15px 15px 0 15px',
  },
});

const TABS = {
  DEFAULT_LIST: 0,
  GROUP_LIST: 1,
};

const ExportFab = withStyles(fabStyles)(({ classes, onClick }) => (
  <Fab color="primary" className={classes.fab} onClick={onClick}>
    <CloudUploadIcon/>
  </Fab>
));

const StudentList = props => {
  const {
    classes,
    emptyList,
    students,
    years,
    programs,
    loadData,
    selectedTab,
    showDeleteAlert,
    exportStudents,
    exportStatus,
    exportDialogOpened,
    closeExportDialog,
  } = props;

  const loadStudentsIfEmpty = () => {
    if (!emptyList && !students.length && !years.length) {
      loadData();
    }
  };
  useEffect(loadStudentsIfEmpty, []);

  const renderStudent = (student, index) => (
    <Student
      data={student}
      index={index + 1}
      onDelete={showDeleteAlert}
      key={student.id}
    />
  );

  const studentList = match(selectedTab)
    .caseEquals(TABS.DEFAULT_LIST, () => students.map(renderStudent))
    .caseEquals(TABS.GROUP_LIST, () => programs.map(program => {
      const groupFilter = student => student.program.name === program.name &&
        student.program.info === program.info;
      const programTitle = `${program.name}${program.info ? ` - ${program.info}` : ''}`;
      return (
        <Group
          programTitle={programTitle}
          students={students.filter(groupFilter).map(renderStudent)}
          key={programTitle}
        />
      );
    }))
    ._();

  return (
    <Card className={classes.card}>
      <SearchBar {...props}/>
      <Years {...props}/>
      <Tabs {...props}/>
      <List component="div">
        { !studentList.length &&
          <EmptyListText>
            Нічого не знайдено
          </EmptyListText> }
        { studentList }
      </List>
      <DeleteAlert {...props}/>
      <DeleteErrorPopup {...props}/>
      <ExportFab onClick={exportStudents}/>
      <ExportDialog
        showDialog={exportDialogOpened}
        exportStatus={exportStatus}
        onClose={closeExportDialog}
      />
    </Card>
  );
};

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
  students: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  programs: PropTypes.array.isRequired,
  emptyList: PropTypes.bool.isRequired,
  selectedTab: PropTypes.number.isRequired,
  loadData: PropTypes.func.isRequired,
  showDeleteAlert: PropTypes.func.isRequired,
  exportStudents: PropTypes.func.isRequired,
  exportStatus: PropTypes.object.isRequired,
  exportDialogOpened: PropTypes.bool,
  closeExportDialog: PropTypes.func.isRequired,
};

export default withStyles(styles)(StudentList);
