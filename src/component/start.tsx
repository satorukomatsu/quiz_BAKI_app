import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import topImage from '../images/Baki-logo.jpg'
import { StartButton } from './StartButton';


export const StartImage = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className="topImage" maxWidth="sm">
            <img src={topImage} alt="topImage" />
            <h1>クイズ検定試験</h1>
            <Box>
              <StartButton />
            </Box>
        </Container>
      </React.Fragment>
    );
  }