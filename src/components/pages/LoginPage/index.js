import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

import './LoginPage.css';
import LoginForm from '../../utilities/LoginForm';
import { dividerMx } from '../../../utils/uiUtils';


const LoginPage = () => {
  return (
    <Box
      pt='5em'
      mb='8em'
      mx={dividerMx}
      className='login-page'
    >
      <Heading
        as='h1'
        mb='1.2em'
        textAlign='center'
      >
        login
      </Heading>
      <LoginForm />
    </Box>
  );
}

export default LoginPage;