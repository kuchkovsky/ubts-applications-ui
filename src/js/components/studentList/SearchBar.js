import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';

const SearchBar = props => {
  const { classes, searchQuery, changeSearchQuery } = props;
  const onChangeHelper = e => changeSearchQuery(e.target.value);
  const clearSearchField = () => changeSearchQuery('');
  return (
    <div className={classes.filter}>
      <TextField
        name="search"
        helperText="Введіть ім'я абітурієнта або назва факультету"
        label="Пошук"
        value={searchQuery}
        onChange={onChangeHelper}
        fullWidth
        variant="outlined"
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Clear"
                onClick={clearSearchField}
              >
                <ClearIcon/>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchQuery: PropTypes.string.isRequired,
  changeSearchQuery: PropTypes.func.isRequired,
};

export default SearchBar;
