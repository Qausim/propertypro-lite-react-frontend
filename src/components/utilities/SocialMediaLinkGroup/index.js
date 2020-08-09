import React from 'react';
import { GrMail } from 'react-icons/gr';
import { Flex, Link, Box, ListItem } from '@chakra-ui/core';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import './SocialMediaLinkGroup.css';


const SocialMediaLinkGroup = ({ linkMap, iconProps = {} }) => {
  const socialIcons = {
    facebook: FaFacebook, twitter: FaTwitter, youtube: FaYoutube,
    linkedin: FaLinkedinIn, instagram: FaInstagram, email: GrMail
  };

  return (
    <Flex
      as='ul'
      align='center'
      listStyleType='none'
      className='social-media-links'
      aria-label='our social media links'
    >
      {
        Object.entries(linkMap).map(([key, url], index) => {
          return (
            <ListItem
              key={index}
              ml={index ? '1em' : '0px'}
            >
              <Link
                href={key === 'email' ? `mailto:${url}` : url}
                isExternal
                aria-label={key}
              >
                <Box
                  size='1em'
                  className='icon'
                  color='gray.600'
                  as={socialIcons[key]}
                  {...iconProps}
                />
              </Link>
            </ListItem>
          );
        })
      }
    </Flex>
  );
}

export default SocialMediaLinkGroup;