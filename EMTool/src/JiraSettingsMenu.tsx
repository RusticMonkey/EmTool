import React from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from './AuthContext';

const JiraSettingsMenu: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsClick = () => {
    handleClose(); // Close the menu
    navigate('/settings'); // Navigate to the settings page
  };

  return (
    <div>
      <IconButton
        aria-controls="jira-settings-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="jira-settings-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isAuthenticated ? (
          <MenuItem onClick={handleSettingsClick}>Jira Settings</MenuItem>
        ) : (
          <MenuItem onClick={handleSettingsClick}>Jira Settings</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default JiraSettingsMenu;
