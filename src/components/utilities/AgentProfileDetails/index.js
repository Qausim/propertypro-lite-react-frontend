import React from 'react';
import { GiWorld } from 'react-icons/gi';
import { GoVerified } from 'react-icons/go';
import { MdPhoneIphone, MdLocalPhone } from 'react-icons/md';
import { Image, Box, Stack, Flex, Text, Link } from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import SocialMediaLinkGroup from '../SocialMediaLinkGroup';


const AgentIcon = ({ as }) => (
  <Box
    as={as}
    className='icon--blue'
    mr='var(--padding-sm)'
  />
);

const AgentProfileDetails = ({ agent, agentName }) => {
  const textMt = '1.3em';
  const gray = 'gray.300';
  const labelMr = 'var(--padding-xs)';

  return (
    <CustomGrid
      as='section'
      columnGap='0px'
      colNumber={[1, 12]}
    >
      <Image
        h='300px'
        alt={agentName}
        objectFit='cover'
        src={agent.image}
        gridColumn={['1/2', '1/6']}
        border='1px solid'
        borderColor={gray}
      />
      <Box
        px={['0px', '1.5em']}
        py={['1.5em', '0px']}
        gridColumn={['1/2', '6/13']}
      >
        <Stack spacing='1em'>
          <Box>
            <Flex align='center' aria-label='mobile phone'>
              <AgentIcon as={MdPhoneIphone} />
              <Text mr={labelMr}>Mobile:</Text>
              <Link href={`tel:${agent.mobile}`}>{agent.mobile}</Link>
            </Flex>
            {
              agent.officePhone ? (
                <Flex align='center' aria-label='office phone'>
                  <AgentIcon as={MdLocalPhone} />
                  <Text mr={labelMr}>Office:</Text>
                  <Link href={`tel:${agent.officePhone}`}>{agent.officePhone}</Link>
                </Flex>
              ) : ''
            }
          </Box>
          <Flex align='center' aria-label='company registration number'>
            <AgentIcon as={GoVerified} />
            <Text mr={labelMr}>RC N&#7885;:</Text>
            <Text>{agent.rcNumber}</Text>
          </Flex>
          <Flex align='center' aria-label='website'>
            <AgentIcon as={GiWorld} />
            <Text mr={labelMr}>Web:</Text>
            <Link
              isExternal
              color='var(--some-blue)'
              href={agent.website}
            >
              {agent.website}
            </Link>
          </Flex>
          <Box mt={textMt}>
            <SocialMediaLinkGroup linkMap={agent.socialLinks} />
          </Box>
        </Stack>
      </Box>
    </CustomGrid>
  );
}

export default AgentProfileDetails;