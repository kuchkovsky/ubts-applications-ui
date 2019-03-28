import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Title = ({ children }) => (
  <Typography variant="h4" gutterBottom>
    { children }
  </Typography>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
