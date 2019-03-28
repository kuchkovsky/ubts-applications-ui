import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import EmptyListText from './EmptyListText';

const styles = {
  openButton: {
    marginTop: -5,
  },
};

const Group = props => {
  const { classes, programTitle, students } = props;
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened(!opened);
  return (
    <ListItem component="div">
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h6" color="textPrimary">
                { `${programTitle} (${students.length})`}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className={classes.openButton} onClick={toggleOpened}>
                { opened &&
                  <RemoveIcon fontSize="small"/> }
                { !opened &&
                  <AddIcon fontSize="small"/> }
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Collapse in={opened}>
            { !students.length &&
              <EmptyListText>
                Список пустий
              </EmptyListText> }
            { students }
          </Collapse>
          <Collapse in={!opened}>
            <EmptyListText>
              Список приховано. Натисніть +, щоб розгорнути
            </EmptyListText>
          </Collapse>
        </Grid>
      </Grid>
    </ListItem>
  );
};

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  programTitle: PropTypes.string.isRequired,
  students: PropTypes.array.isRequired,
};

export default withStyles(styles)(Group);
