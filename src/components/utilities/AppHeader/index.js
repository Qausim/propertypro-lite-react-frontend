import React, { useState } from 'react';
import { Menu } from 'react-feather';
import { Flex, Box } from '@chakra-ui/core';

import './AppHeader.css';
import AppLogo from '../AppLogo';
import HeaderNavs from '../HeaderNavs';
import { headerNavs, authNavs } from '../../../utils/constants';


const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      top={0}
      as='header'
      color='white'
      p='var(--padding-md)'
      backgroundColor='#252526'
      onClick={() => { if (isOpen) setIsOpen(false); }}
      className={`${isOpen ? 'open ' : ''}app-header js-space-between align-center`}
    >
      <Flex className='align-center menu-logo-wrapper'>
        <Box
          mr='auto'
          as={Menu}
          size='40px'
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen)
          }}
          className='menu-button md-no-display'
        />
        <AppLogo imgSize='40px' />
      </Flex>
      <HeaderNavs navs={headerNavs} />
      <HeaderNavs navs={authNavs} />
    </Flex>
  );
}
 
export default AppHeader;