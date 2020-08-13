import React, { Fragment } from 'react';
import { Stack, Box, Heading, Text, Icon } from '@chakra-ui/core';

import ReviewForm from '../ReviewForm';
import SectionDivider from '../SectionDivider';


const AgentProfileReviewTab = ({ reviews }) => {
  return (
    <Stack>
      <ReviewForm />
      <Box as='section'>
        <Heading as='h3'>Reviews ({reviews.length})</Heading>
        {
          reviews.map(({ userName, reviewText, rating }, index) => {
            return (
              <Fragment key={index}>
                <SectionDivider mt='1.5em' mb='1.5em' />
                <Box>
                  <Text
                    fontSize='1.2em'
                    className='text--bold text--capitalize'
                  >{userName}</Text>
                  <Box
                    mt='.3em'
                    aria-label={`user's rating value ${rating}`}
                  >
                    {
                      (() => {
                        const stars = [];
                        for (let i = 0; i < 5; i++) {
                          const value = i + 1;
                          // eslint-disable-next-line
                          {/* const diff = value - rating;
                          const starClass = value <= rating
                          ? 'full' : diff >= 1
                          ? 'empty' : diff >= .75
                          ? 'quarter' : diff >= .5
                          ? 'half' : 'three-quarter' */}
                          stars.push(
                            <Icon
                              key={i}
                              size='1em'
                              name='star'
                              mr={i ? '4px' : '0px'}
                              color={value <= rating ? 'yellow.300' : 'gray.400'}
                            />
                          );
                        }

                        return stars;
                      })()
                    }
                  </Box>
                  <Text mt='1.4em'>{reviewText}</Text>
                </Box>
              </Fragment>
            );
          })
        }
      </Box>
    </Stack>
  );
}

export default AgentProfileReviewTab;