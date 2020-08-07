import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core';

import './App.css';
import AppRoutes from './appRoutes';
import Footer from './components/utilities/Footer';
import customTheme from './config/chakraThemeConfig';
import AppHeader from './components/utilities/AppHeader';
import AppSpinner from './components/utilities/AppSpinner';


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <AppSpinner />
        <AppHeader />
        <Box as='main' tabIndex='0'>
          <AppRoutes />
        </Box>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
