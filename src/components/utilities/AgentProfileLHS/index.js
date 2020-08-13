import React from 'react';
import { Box } from '@chakra-ui/core';

import { fillArray } from '../../../utils/arrayUtils';
import AgentProfileDetails from '../AgentProfileDetails';
import AgentProfileTabbedView from '../AgentProfileTabbedView';


const AgentProfileLHS = ({ sectionMt, agent, isAgency, agentName }) => {  return (
    <Box
      gridColumn={fillArray(2, '1/2').concat('1/9')}
      pr={fillArray(2, '0px').concat('var(--padding-md)')}
    >
      <AgentProfileDetails {...{ agent, agentName }} />
      <AgentProfileTabbedView
        {...{
          agent, isAgency, agentName, mt: sectionMt
        }}
      />
    </Box>
  );
}

export default AgentProfileLHS;