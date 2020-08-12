import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/core';

import ContactForm from '../ContactForm';
import TwoColumnsWrapperGrid from '../TwoColumnsWrapperGrid';


const FeedbackFormSection = ({ px, mt }) => {
  return (
    <Box as='section' {...{ px, mt }}>
      <TwoColumnsWrapperGrid>
        <Box>
          <Heading as='h2'>feedback form</Heading>
          <Text mt='2em'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem possimus in qui
            dolores maiores ea, eligendi labore, molestias perferendis pariatur modi iste similique
            aut nam fugiat repellendus asperiores tenetur.
            </Text>
        </Box>
        <ContactForm
          spacingY='1em'
          buttonText='submit'
          formClass='feedback-form'
        />
      </TwoColumnsWrapperGrid>
    </Box>
  );
}

export default FeedbackFormSection;