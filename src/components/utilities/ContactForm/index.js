import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Box, Stack, InputGroup, InputLeftAddon, Input, Icon, Textarea, Button } from '@chakra-ui/core';


const ContactForm = ({ formClass, buttonText, spacingY, mt }) => {
  return (
    <Box as='form' className={formClass} mt={mt}>
      <Stack spacing={spacingY}>
        <InputGroup>
          <InputLeftAddon>
            <Box as={FaUser} className='icon icon--blue' />
          </InputLeftAddon>
          <Input
            isRequired
            type='text'
            bg='#EDF2F7'
            placeholder='First Name, Last Name'
            aria-label='Your name (first name, last name)'
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Icon name='email' className='icon icon--blue' />
          </InputLeftAddon>
          <Input
            isRequired
            type='email'
            bg='#EDF2F7'
            aria-label='Your email'
            placeholder='Your email'
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Icon name='phone' className='icon icon--blue' />
          </InputLeftAddon>
          <Input
            isRequired
            type='tel'
            bg='#EDF2F7'
            aria-label='Your phone'
            placeholder='Your phone'
          />
        </InputGroup>
        <Textarea
          h='150px'
          isRequired
          bg='#EDF2F7'
          aria-label='Your message'
          placeholder='Your message'
        />
        <Button
          color='white'
          type='submit'
          bg='var(--some-blue)'
          mt='var(--padding-xs)'
          className='text--uppercase'
          _hover={{ bg: 'blue.500' }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
}

export default ContactForm;