import React from 'react';
import { Flex, Box, List, ListItem, Link } from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import SeeOpportunitiesButtonWrapper from '../SeeOpportunitiesButtonWrapper';


const AboutUsTopNavbar = ({ mt }) => {
  return (
    <Flex
      mt={mt}
      wrap='wrap'
      px={dividerMx}
      className='navbar'
      justify='space-between'
    >
      <Box
        as='nav'
        d='flex'
        alignItems='center'
        aria-label='page navigation'
      >
        <List
          d='flex'
          flexWrap='wrap'
          className='text--capitalize'
        >
          {
            (() => {
              const flexProps = {
                flexGrow: 1, justify: ['space-between', 'unset']
              };

              return (
                <>
                  <Flex {...flexProps}>
                    <ListItem>
                      <Link href='#history'>history</Link>
                    </ListItem>
                    <ListItem>
                      <Link href='#leadership'>our leadership</Link>
                    </ListItem>
                  </Flex>
                  <Flex {...flexProps}>
                    <ListItem>
                      <Link href='#offices'>offices</Link>
                    </ListItem>
                    <ListItem>
                      <Link href='#workspace'>our workspace</Link>
                    </ListItem>
                  </Flex>
                </>
              );
            })()
          }
        </List>
      </Box>
      <SeeOpportunitiesButtonWrapper />
    </Flex>
  );
}

export default AboutUsTopNavbar;