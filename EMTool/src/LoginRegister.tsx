import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from './AuthContext';

const LoginRegister: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <Button variant="outlined" color="primary" onClick={login}>Login</Button>
          <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>Register</Button>
        </>
      ) : (
        <Button variant="outlined" color="secondary" onClick={logout}>Logout</Button>
      )}
    </div>
  );
};

export default LoginRegister;
