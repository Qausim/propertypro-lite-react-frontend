import { GoKey } from 'react-icons/go';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Stack, Icon, Flex, Checkbox, Link, FormLabel, Button, Box } from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import { routes } from '../../../utils/constants';
import CustomInputGroup from '../CustomInputGroup';


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Stack
      mx='auto'
      as='form'
      maxW='600px'
      spacing='1.5em'
      className='login-form'
      shouldWrapChildren
    >
      <CustomInputGroup
        size='lg'
        name='email'
        type='email'
        leftAddon={<Icon name='email' className='icon--blue' />}
      />
      <CustomInputGroup
        size='lg'
        name='password'
        type={showPassword ? 'text' : 'password'}
        leftAddon={<Box as={GoKey} className='icon--blue' />}
        rightAddon={
          <Icon
            role='button'
            name={`view${showPassword ? '-off' : ''}`}
            onClick={() => setShowPassword(!showPassword)}
          />
        }
      />
      <CustomGrid
        colNumber={[1, 2]}
        color='var(--some-blue)'
      >
        <Flex
          align='center'
          gridColumn='1/2'
        >
          <Checkbox
            size='lg'
            name='rememberMe'
          />
          <FormLabel
            pb='0px'
            ml='.5em'
            htmlFor='rememberMe'
          >
            remember me
          </FormLabel>
        </Flex>
        <Link
          as={RouterLink}
          mt={['.5em', '0px']}
          ml={['0px', 'auto']}
          to={routes.forgotPassword}
          gridColumn={['1/2', '2/3']}
        >
          forgot password?
          </Link>
      </CustomGrid>
      <Button
        w='100%'
        mt='1em'
        size='lg'
        color='white'
        type='submit'
        bg='var(--some-blue)'
        _hover={{ bg: 'blue.500' }}
      >
        log in
      </Button>
    </Stack>
  );
}

export default LoginForm;