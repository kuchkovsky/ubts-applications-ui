import React from 'react';
import PropTypes from 'prop-types';
import MuiTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

const Tabs = props => {
  const { selectedTab, changeSelectedTab } = props;
  const handleTabChange = (_, value) => changeSelectedTab(value);
  return (
    <MuiTabs
      value={selectedTab}
      onChange={handleTabChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
    >
      <Tab icon={<PersonIcon/>} label="Загальний список"/>
      <Tab icon={<GroupIcon/>} label="Список по групах"/>
    </MuiTabs>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  changeSelectedTab: PropTypes.func.isRequired,
};

export default Tabs;
