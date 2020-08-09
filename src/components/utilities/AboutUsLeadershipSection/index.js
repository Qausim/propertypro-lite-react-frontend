import React from 'react';
import { Box, Text, ListItem, Image, Heading } from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import { dividerMx } from '../../../utils/uiUtils';
import SocialMediaLinkGroup from '../SocialMediaLinkGroup';


const AboutUsLeadershipSection = ({ mt }) => {
  const roles = [
    'co-founder and executive chairman', 'senior vice president, product',
    'chief technology officer', 'legal officer', 'senior accountant', 'chief operations officer'
  ];
  const images = [
    require('../../../assets/pexels-thyrone-paas-1722198.jpg'),
    require('../../../assets/pexels-emre-keshavarz-3788039.jpg'),
    require('../../../assets/pexels-andrea-piacquadio-3777943.jpg'),
    require('../../../assets/pexels-andrea-piacquadio-762020.jpg'),
    require('../../../assets/pexels-christina-morillo-1181519.jpg'),
    require('../../../assets/pexels-andrea-piacquadio-3813342.jpg')
  ];

  const users = new Array(6).fill({
    firstName: 'belladon',
    lastName: 'nickerman',
    socialLinks: {
      facebook: 'https://facebook.com', twitter: 'https://twitter.com',
      instagram: 'https://instagram.com', email: 'user@example.com'
    }
  }).map((user, index) => {
    const newUser = { ...user };
    newUser.role = roles[index];
    newUser.image = images[index];
    return newUser;
  })
  return (
    <Box
      mt={mt}
      pb={mt}
      bg='#f5f5f5'
      as='section'
      px={dividerMx}
      id='leadership'
    >
      <Heading as='h2' pt='1em'>our leadership</Heading>
      <CustomGrid
        as='ul'
        gap='2em'
        listStyleType='none'
        colNumber={[1, 2, 3]}
      >
        {
          users.map(({ firstName, lastName, role, image, socialLinks }, index) => {
            return (
              <ListItem
                key={index}
                className='text--capitalize'
              >
                <Image
                  w='100%'
                  h='250px'
                  src={image}
                  objectFit='cover'
                />
                <Box
                  p='1.2em'
                  bg='white'
                >
                  <Text
                    fontSize='1.3em'
                    className='text--bold'
                  >
                    {`${firstName} ${lastName}`}
                  </Text>
                  <Text
                    mb='.8em'
                    fontSize='.9em'
                  >{role}</Text>
                  <SocialMediaLinkGroup linkMap={socialLinks} />
                </Box>
              </ListItem>
            );
          })
        }
      </CustomGrid>
    </Box>
  );
}

export default AboutUsLeadershipSection;