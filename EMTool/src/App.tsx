import React from 'react';
import LoginRegister from './LoginRegister';
import JiraSettingsMenu from './JiraSettingsMenu';
import { AppBar, Toolbar, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            EmTool
          </Typography>
          <LoginRegister />
          <JiraSettingsMenu />
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This empty Toolbar pushes the content below the AppBar */}
      <div style={{ padding: '20px' }}>
        <h2>Welcome to EmTool!</h2>
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
};

export default App;
