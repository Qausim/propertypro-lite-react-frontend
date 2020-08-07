import React from 'react';
import moment from 'moment';

import { GoMail } from 'react-icons/go';
import { FiHeart } from 'react-icons/fi';
import { fillArray } from '../../../utils/arrayUtils';
import { toTitleCase } from '../../../utils/textUtils';
import { Icon, Text, Flex, Box, Tag } from '@chakra-ui/core';
import { dividerMx } from '../../../utils/uiUtils';


const TopTag = ({ text, bg, mr }) => (
  <Tag
    {...{ bg, mr }}
    color='white'
    fontSize='.8rem'
    fontWeight='bold'
    padding='var(--padding-xs)'
    className='text--uppercase'
  >
    {text}
  </Tag>
);

const PropertyDetailsTopBanner = ({ property }) => {
  const bannerActions = [
    {
      label: 'email', title: 'mail this property to a friend', icon: GoMail, action() { }
    },
    {
      label: 'save', title: 'save this property to wishlist', icon: FiHeart, action() { }
    },
    // {
    //   label: 'share', title: 'share this property', icon: FiShare2, action() { }
    // }
  ];

  return (
    <Flex
      wrap='wrap'
      bg='#3B3E4B'
      align='center'
      px={dividerMx}
      color='gray.300'
      className='details-top-banner'
      py='calc(var(--padding-xs) + var(--padding-sm))'
      justify={fillArray(1, 'center').concat('space-between')}
    >
      <Flex className='left' align='center'>
        <TopTag bg="green.500" mr='var(--padding-xs)' text={property.category} />
        <TopTag bg="red.500" text={property.status} />
        <Icon name='time' ml='var(--padding-sm)' />
        <Text ml='var(--padding-xs)'>
          {toTitleCase(moment(property.createdAt).fromNow())}
        </Text>
      </Flex>
      <Flex
        align='center'
        className='right'
        mt={fillArray(1, 'var(--padding-md)').concat('0px')}
      >
        {
          bannerActions.map(({ label, title, icon, action }, index) => {
            const iconStyle = {
              size: '1.5rem',
              role: 'button',
              ml: index ? 'var(--padding-sm)' : fillArray(1, 'var(--padding-sm)').concat(0),
            };
            return (
              <Box
                as={icon}
                key={index}
                title={title}
                {...iconStyle}
                onClick={action}
                aria-label={label}
              />
            );
          })
        }
      </Flex>
    </Flex>
  );
}

export default PropertyDetailsTopBanner;
