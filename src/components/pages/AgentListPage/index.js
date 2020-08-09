import React from 'react';
import { Box, Heading } from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import CustomGrid from '../../utilities/CustomGrid';
import { fillArray } from '../../../utils/arrayUtils';
import usePageTitle from '../../../hooks/usePageTitle';
import AgentGridListItem from '../../utilities/AgentGridListItem';


const AgentListPage = () => {
  usePageTitle('agents');
  const agents = [
    ...fillArray(3, {
      type: 'agency',
      name: 'Sundial Properties',
      address: '22 Bolaji Osikeye Street',
      city: 'lagos',
      state: 'lagos',
      country: 'nigeria',
      mobile: '+23434343344',
      officePhone: '+23434343345',
      image: require('../../../assets/placeholder-agent-logo.jpg'),
      socialLinks: {
        facebook: 'https://facebook.com', twitter: 'https://twitter.com',
        youtube: 'https://youtube.com', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com'
      }
    }),
    ...fillArray(3, {
      type: 'agent',
      firstName: 'bola',
      lastName: 'olaseinder',
      address: '22 Bolaji Osikeye Street',
      city: 'lagos',
      state: 'lagos',
      country: 'nigeria',
      mobile: '+23434343344',
      office: '+23434343345',
      image: require('../../../assets/pexels-thyrone-paas-1722198.jpg'),
      socialLinks: {
        facebook: 'https://facebook.com', twitter: 'https://twitter.com',
        youtube: 'https://youtube.com', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com'
      }
    })
  ];
  return (
    <Box className='agent-list-page' mx={dividerMx} my='4em'>
      <Heading
        as='h1'
        mb='1em'
        className='text--capitalize'
      >
        agents
      </Heading>
      <CustomGrid
        as='ul'
        gap='2em'
        listStyleType='none'
        colNumber={[1, 2, 3]}
      >
        {
          agents.map((agent, index) => <AgentGridListItem key={index} agent={agent} />)
        }
      </CustomGrid>
    </Box>
  );
}

export default AgentListPage;