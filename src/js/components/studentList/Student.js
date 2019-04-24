import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { STUDENTS } from '../../utils/routes';

const Student = ({ data, index, onDelete }) => (
  <ListItem button component={Link} to={`${STUDENTS}/${data.id}`}>
    <ListItemAvatar>
      <Avatar>
        {`${data.name.charAt(0)}${data.name.charAt(data.name.indexOf(' ') + 1)}`}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <Typography variant="h5" color="textPrimary">
          { `${index}. ${data.name}` }
        </Typography>
      }
      secondary={
        <Typography component="span" variant="subtitle1" color="textPrimary">
          { data.program.name }
        </Typography>
      }/>
    <ListItemSecondaryAction>
      <IconButton onClick={() => onDelete(data.id)}>
        <DeleteIcon/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

Student.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Student;
