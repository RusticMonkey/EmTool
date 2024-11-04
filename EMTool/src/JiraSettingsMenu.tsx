import React from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from './AuthContext';

const JiraSettingsMenu: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem onClick={handleClose}>Jira Settings</MenuItem>
        ) : (
          <MenuItem onClick={handleClose} disabled>
            Jira Settings (Login required)
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default JiraSettingsMenu;
