import React from 'react';
import { Box, Heading, Flex, Text, Textarea, Button } from '@chakra-ui/core';

import ReviewFormRatingStars from '../ReviewFormRatingStars';


const ReviewForm = () => {
  return (
    <Box as='form'>
      <Heading as='h3'>Add a review</Heading>
      <Flex align='center'>
        <Text mr='1em'>Choose rating:</Text>
        <ReviewFormRatingStars my='1.5em' />
      </Flex>
      <Textarea
        isRequired
        placeholder='Enter review text'
      />
      <Button
        my='2.5em'
        color='white'
        bg='var(--some-blue)'
        className='text--uppercase'
        _hover={{ bg: 'blue.500' }}
      >submit</Button>
    </Box>
  );
}

export default ReviewForm;