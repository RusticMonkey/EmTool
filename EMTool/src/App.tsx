import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import LoginRegister from './LoginRegister';
import JiraSettingsMenu from './JiraSettingsMenu';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            EMTool
          </Typography>
          <LoginRegister />
          <JiraSettingsMenu />
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3, mt: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;


