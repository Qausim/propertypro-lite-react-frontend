import React from 'react';
import { Image, Text, Flex } from '@chakra-ui/core';

import AppLogo from '../AppLogo';
import { fillArray } from '../../../utils/arrayUtils';
import SocialMediaLinkGroup from '../SocialMediaLinkGroup';


const AboutUsHistorySection = () => {
  return (
    <>
      <Image
        minH='70%'
        objectFit='cover'
        alt='smiling men discussing in a workplace'
        src={require('../../../assets/pexels-helena-lopes-1015568-sm.jpg')}
      />
      <Flex direction='column' fontSize='1.2em'>
        <AppLogo
          imgSize={['24px', '40px']}
          fontSize={['1.5em', '2em']}
        />
        <Text mt='2em' mb='1.2em'>
          At Homely, we believe that when it comes to finding a home what’s outside the front
          door is just as important as what’s behind it.
          </Text>
        <Text as='small' color='gray.600'>
          <Text as='span' d='inline-block' mb='.8em'>
            That’s why we go beyond the typical listings, by sourcing insights straight from locals
            and offering over 34 neighborhood map overlays, to give people a deeper understanding of
            what living in a home and neighborhood is really like.
            </Text>
          <Text as='span'>
            We’re committed to helping them discover a place where they will love to live and where
            they will feel more connected to the community and to each other. It’s why we strive every
            day to help build a more neighborly world.
            </Text>
        </Text>
        <Flex
          wrap='wrap'
          justify={['center', 'unset']}
          mt={fillArray(2, '2em').concat('auto')}
        >
          <Text
            mr={['0px', '1em']}
            mb={['.5em', '0px']}
            width={['70vw', 'unset']}
            textAlign={['center', 'unset']}
          >
            Follow us on:
            </Text>
          <SocialMediaLinkGroup
            linkMap={
              {
                facebook: 'https://facebook.com/qauzeems',
                twitter: 'https://twitter.com/qausim_yousuf',
                youtube: 'https://youtube.com',
                linkedin: 'https://linkedin.com/in/olawumi-q-yusuff',
                instagram: 'https://instagram.com/qausim_yousuf'
              }
            }
          />
        </Flex>
      </Flex>
    </>
  );
}

export default AboutUsHistorySection;