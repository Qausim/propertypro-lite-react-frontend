import React, { Fragment } from 'react';
import { BsCrop } from 'react-icons/bs';
import { GiHomeGarage } from 'react-icons/gi';
import { FaBed, FaBath } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';
import { List, Image, Box, Text, Stack, Flex, Link } from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import './AgentProfilePropertyList.css';
import PropertyPrices from '../PropertyPrices';
import SectionDivider from '../SectionDivider';
import { routes } from '../../../utils/constants';
import { fillArray } from '../../../utils/arrayUtils';
import PropertyTagWrapper from '../PropertyTagWrapper';


const AgentProfilePropertyList = ({ agent, isAgency, agentName }) => {
  const { listings } = agent;
  const icons = {
    bedroom: FaBed, bathroom: FaBath, garage: GiHomeGarage, size: BsCrop,
  };

  return (
    <List>
      {
        listings.length ? listings.map((listing, index) => {
          return (
            <Fragment key={index}>
              <CustomGrid
                as='li'
                columnGap='2em'
                colNumber={fillArray(2, 1).concat(12)}
                className='agent-profile-property-list-item'
              >
              <Link
                as={RouterLink}
                to={`${routes.properties}/${listing.slug}`}
                gridColumn={fillArray(2, '1/2').concat('1/5')}
              >
                <Image
                  width='100%'
                  height='250px'
                  objectFit='cover'
                  src={listing.image}
                />
              </Link>
                <Box
                  pos='relative'
                  pt={fillArray(2, '1em').concat('0px')}
                  gridColumn={fillArray(2, '1/2').concat('5/13')}
                >
                  <PropertyTagWrapper
                    bg='red.500'
                    color='white'
                    borderRadius='4px'
                  >
                    <Text
                      fontSize='.7em'
                      fontWeight='bold'
                    >
                      {listing.targetType}
                    </Text>
                  </PropertyTagWrapper>
                  <Stack
                    mt='4em'
                    spacing='.6em'
                  >
                    <Box>
                      <Text
                        fontSize='1.4em'
                        fontWeight='600'
                        className='text--capitalize'
                      >
                        {listing.title}
                      </Text>
                      <Flex
                        top='0px'
                        right='0px'
                        align='center'
                        color='gray.400'
                        className='prices'
                        pos={fillArray(2, 'static').concat('absolute')}
                        direction={fillArray(2, 'row').concat('column')}
                        justify={fillArray(2, 'unset').concat('flex-end')}
                      >
                        <Text
                          mr={fillArray(2, '4px').concat('0px')}
                        >Price:</Text>
                        <PropertyPrices {...{ property: listing }} />
                      </Flex>
                    </Box>
                    <Flex>
                      {
                        Object.entries(icons).map(([key, icon], iconIndex) => (
                          <Flex
                            key={key}
                            align='center'
                            aria-label={`number of ${key}s`}
                            ml={iconIndex ? 'var(--padding-sm)' : '0px'}
                          >
                            <Box
                              as={icon}
                              size='16px'
                              color='gray.400'
                              mr='var(--padding-xs)'
                            />
                            <Text className='text--capitalize'>
                              {listing[key]} {
                                key === 'size'
                                  ? 'sq ft' : key === 'bedroom'
                                    ? 'beds' : key === 'bathroom'
                                      ? 'baths' : `${key}s`
                              }
                            </Text>
                          </Flex>
                        ))
                      }
                    </Flex>
                    <CustomGrid
                      mt='1.4em'
                      colNumber={[2]}
                      columnGap='var(--padding-sm)'
                      gridTemplateRows='repeat(1, 60px)'
                    >
                      <Box gridColumn={fillArray(2, '1/3').concat('1/2')}>
                        <Text mb='auto'>
                          <span className='text--capitalize'>call:</span>
                          <Link
                            isExternal
                            ml='var(--padding-xs)'
                            className='text--bold'
                            href={`tel:${agent.mobile}`}>{agent.mobile}</Link>
                        </Text>
                        <Flex>
                          <Box
                            size='24px'
                            as={MdVerifiedUser}
                            mr='var(--padding-xs)'
                            color={agent.verified ? 'green.400' : 'gray.400'}
                            aria-label={agent.verified ? 'verified agent' : 'unverified agent'}
                          />
                          <Text className='text--capitalize'>{isAgency ? agent.officialName : agentName}</Text>
                        </Flex>
                      </Box>
                      <Flex
                        w='150px'
                        align='center'
                        justify='center'
                        borderRadius='4px'
                        p='var(--padding-xs)'
                        border='1px solid var(--light-gray)'
                        mt={fillArray(2, '.8em').concat('0px')}
                        gridColumn={fillArray(2, '1/3').concat('2/3')}
                      >
                        <Image
                          maxH='48px'
                          src={agent.image}
                          alt={agent.companyName}
                        />
                      </Flex>
                    </CustomGrid>
                  </Stack>
                </Box>
              </CustomGrid>
              <SectionDivider mt='2em' mb='2em' />
            </Fragment>
          );
        }) : <Text className='text--bold'>No property listings for this agent</Text>
      }
    </List>
  );
}

export default AgentProfilePropertyList;