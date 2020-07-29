import React from 'react';
import { Box } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';


const HeaderNavs = ({ navs }) => {
  return (
    <Box as='nav' className='header-nav text--uppercase'>
        {
          navs.map(({ title, link }, index) => (
            <NavLink
              exact
              to={link}
              key={index}
            >
              {title}
            </NavLink>
          ))
        }
      </Box>
  );
}
 
export default HeaderNavs;