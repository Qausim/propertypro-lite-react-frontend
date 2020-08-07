import React from 'react';
import { Box } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';


const HeaderNavs = ({ navs, label }) => {
  return (
    <Box as='nav' className='header-nav text--uppercase' aria-label={label}>
        {
          navs.map(({ title, link }, index) => (
            <NavLink
              exact
              role=''
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