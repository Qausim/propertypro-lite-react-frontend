import React from "react";
import { withRouter } from "react-router-dom";
import { RiHomeHeartLine } from 'react-icons/ri';
import { Box, Heading, Flex, Icon } from "@chakra-ui/core";

import './AppLogo.css';
import { routes } from '../../../utils/constants';


const AppLogo = ({ history, clickable, imgSize = '40px', fontSize = '2em', fontColor = 'white' }) => {
  return (
    <Flex
      onClick={
        () => {
          if (clickable) history.push(routes.home);
        }
      }
      className={`${clickable ? 'clickable ' : ''}app-logo-wrapper align-center`}
    >
      <Box
        borderRadius='50%'
        p='var(--padding-xs)'
        bg='var(--some-blue)'
        mr='var(--padding-xs)'
      >
        <Icon as={RiHomeHeartLine} color='white' size={imgSize} />
      </Box>
      <Heading as="p" {...{ fontSize, fontColor }}>
        homely
      </Heading>
    </Flex>
  );
};

export default withRouter(AppLogo);
