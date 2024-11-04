import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box } from '@mui/material';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [apiUrl, setApiUrl] = useState('');
  const [token, setToken] = useState('');

  const handleCancel = () => {
    navigate('/'); // Navigate back to the home page
  };

  const handleSave = () => {
    // Placeholder for save logic
    console.log('API URL:', apiUrl);
    console.log('Token:', token);
    navigate('/'); // Navigate back to the home page after saving
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh', // Ensure full viewport height to align top
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
          maxWidth: '600px', // Make text areas wider by default
          marginTop: '20px', // Add some space from the top
        }}
      >
        <h2>Settings</h2>
        <TextField
          label="Base API URL"
          variant="outlined"
          value={apiUrl}
          onChange={(e) => setApiUrl(e.target.value)}
          placeholder="https://api.example.com"
          fullWidth
          sx={{ minWidth: '500px' }} // Set a wider default minWidth for the text field
        />
        <TextField
          label="Token"
          variant="outlined"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your token"
          fullWidth
          sx={{ minWidth: '500px' }} // Set a wider default minWidth for the text field
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
