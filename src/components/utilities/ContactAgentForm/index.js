import React from 'react';
import {
  Box, Text, Link, Image, Stack, InputGroup,
  InputLeftAddon, Input, Textarea, Button, Icon, Flex
} from '@chakra-ui/core';
import { FaUser } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';

import CustomGrid from '../CustomGrid';
import { fillArray } from '../../../utils/arrayUtils';


const ContactAgentForm = ({ agent, gridColumn, my, ml, mr }) => {
  return (
    <Box
      mr={mr}
      my={my}
      ml={ml}
      maxW='330px'
      gridColumn={gridColumn}
      className='contact-agent-form'
    >
      <Box
        top='100px'
        p='var(--padding-mdu)'
        boxShadow='0 8px 16px rgba(0,0,0,.25)'
        pos={fillArray(2, 'static').concat('sticky')}
      >
        <CustomGrid
          colNumber={[2]}
          columnGap='var(--padding-sm)'
          gridTemplateRows='repeat(1, 60px)'
        >
          <Box>
            <Text mb='auto'>
              <span className='text--capitalize'>call:</span>
              <Link
                isExternal
                ml='var(--padding-xs)'
                className='text--bold'
                href={`tel:${agent.phone}`}>{agent.phone}</Link>
            </Text>
            <Flex>
              <Box
                size='24px'
                as={MdVerifiedUser}
                mr='var(--padding-xs)'
                color={agent.verified ? 'green.400' : 'gray.400'}
                aria-label={agent.verified ? 'verified agent' : 'unverified agent'}
              />
              <Text className='text--capitalize'>{agent.officialName}</Text>
            </Flex>
          </Box>
          <Flex
            justify='center'
            borderRadius='4px'
            p='var(--padding-xs)'
            border='1px solid var(--light-gray)'
          >
            <Image
              h='100%'
              src={agent.logo}
              aria-label={agent.companyName}
            />
          </Flex>
        </CustomGrid>

        <Box as='form' mt='var(--padding-md)'>
          <Stack>
            <InputGroup>
              <InputLeftAddon>
                <Box as={FaUser} className='icon' />
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
                <Icon name='email' className='icon' />
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
                <Icon name='phone' className='icon' />
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
            >contact agent</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactAgentForm;