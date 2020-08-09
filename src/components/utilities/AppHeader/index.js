import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
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
      tabIndex='0'
      color='white'
      p='var(--padding-sm)'
      backgroundColor='#252526'
      onClick={() => { if (isOpen) setIsOpen(false); }}
      className={`${isOpen ? 'open ' : ''}app-header js-between align-center pos-sticky`}
    >
      <Flex className='align-center menu-logo-wrapper'>
        <Box
          mr='auto'
          as={FiMenu}
          size='40px'
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen)
          }}
          className='menu-button md-no-display'
        />
        <AppLogo clickable={true} />
      </Flex>
      <HeaderNavs navs={headerNavs} label='main navigation' />
      <HeaderNavs navs={authNavs} label='authentication pages navigation' />
    </Flex>
  );
}
 
export default AppHeader;