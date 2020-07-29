import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/core";

import './AppLogo.css';
import { routes } from '../../../utils/constants';


const AppLogo = ({ imgSize, fontSize, history }) => {
  const width = imgSize ? imgSize : '60px';
  const height = width;
  return (
    <Flex
      onClick={() => history.push(routes.home)}
      className='app-logo-wrapper flex-column align-center'
    >
      <Box
        bgSize='cover'
        bg="transparent"
        className="app-logo"
        {
          ...{ width, height }
        }
      />
      <Heading as="p" color="#FFFDD0" {...{ fontSize }}>
        homely
      </Heading>
    </Flex>
  );
};

export default withRouter(AppLogo);
