import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import { Box, Text, Link, Image, Flex } from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import ContactForm from '../ContactForm';
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
        <ContactForm
          mt='var(--padding-md)'
          buttonText='contact agent'
        />
      </Box>
    </Box>
  );
}

export default ContactAgentForm;