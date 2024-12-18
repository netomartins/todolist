import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
