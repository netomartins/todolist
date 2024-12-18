import styled from 'styled-components';
import { AppBar } from '@mui/material';

export const Container = styled(AppBar)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  padding: 10px 0;

  .MuiToolbar-root {
    justify-content: center;
  }
`;
