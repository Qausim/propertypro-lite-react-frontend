import React from 'react';
import { withRouter } from 'react-router-dom';
import { MdPhoneIphone, MdLocalPhone } from 'react-icons/md';
import { Box, Image, Text, Flex, Link, ListItem } from '@chakra-ui/core';

import SocialMediaLinkGroup from '../SocialMediaLinkGroup';


const AgentGridListItem = ({ agent, history }) => {
  const textMt = '1.3em';
  const gray = 'gray.300';
  const iconMr = 'var(--padding-sm)';
  const labelMr = 'var(--padding-xs)';

  return (
    <ListItem
      border='1px solid'
      borderColor={gray}
      className='agent-list-item'
      _hover={{ cursor: 'pointer' }}
      onClick={() => history.push('#')}
    >
      <Image
        h='300px'
        objectFit='cover'
        src={agent.image}
      />
      <Box
        p='1.5em'
        borderTop='1px solid'
        borderTopColor={gray}
      >
        <Box>
          {
            (() => {
              const isAgent = agent.type === 'agent';
              const agentName = isAgent ? `${agent.firstName} ${agent.lastName}` : agent.name;
              return (
                <Text
                  fontSize='1.4em'
                  color='var(--some-blue)'
                  className={isAgent ? 'text--capitalize' : ''}
                >
                  {agentName}
                </Text>
              );
            })()
          }
          <Text
            fontSize='.9em'
            color='gray.500'
            className='text--capitalize'
          >
            {
              (() => {
                const { address, city, state, country } = agent;
                return `${address}, ${city}, ${state}, ${country}`;
              })()
            }
          </Text>
        </Box>
        <Box mt={textMt}>
          <Flex align='center' aria-label='mobile phone'>
            <Box as={MdPhoneIphone} mr={iconMr} />
            <Text mr={labelMr}>Mobile:</Text>
            <Link href={`tel:${agent.mobile}`}>{agent.mobile}</Link>
          </Flex>
          {
            agent.officePhone ? (
              <Flex align='center' aria-label='office phone'>
                <Box as={MdLocalPhone} mr={iconMr} />
                <Text mr={labelMr}>Office:</Text>
                <Link href={`tel:${agent.officePhone}`}>{agent.officePhone}</Link>
              </Flex>
            ) : ''
          }
        </Box>
        <Box mt={textMt}>
          <SocialMediaLinkGroup linkMap={agent.socialLinks} />
        </Box>
      </Box>
    </ListItem>
  );
}

export default withRouter(AgentGridListItem);