import React, { useState } from 'react';
import { Tab, TabPanel, Box, Tabs, TabList, TabPanels, Text } from '@chakra-ui/core';
import AgentProfilePropertyList from '../AgentProfilePropertyList';
import AgentProfileReviewTab from '../AgentProfileReviewTab';


const AgentProfileTabbedView = ({ mt, agent, isAgency, agentName }) => {
  const { about, listings, reviews } = agent;
  const [, setTabIndex] = useState(0);
  const tabList = [];
  const tabPanels = [];
  Object.entries({ about, listings, reviews }).forEach(([key, value], index) => {
    const isAbout = key === 'about';
    const isListings = key === 'listings';
    tabList.push(
      <Tab
        key={index}
        className='text--capitalize'
        _hover={{ bg: 'var(--some-green)', color: 'white' }}
        _selected={{ bg: 'var(--some-green)', color: 'white' }}
      >
        {isAbout ? 'about agent' : key}
      </Tab>
    );
    tabPanels.push(
      <TabPanel key={index}>
        {
          isAbout ? (
            <Text>{value}</Text>
          ) : isListings ? (
            <AgentProfilePropertyList {...{ agent, isAgency }} />
          ) : <AgentProfileReviewTab {...{ reviews }} />
        }
      </TabPanel>
    );
  });

  return (
    <Box
      mt={mt}
      as='section'
      id='agent-tabbed-details'
    >
      <Tabs variant='unstyled' onChange={index => setTabIndex(index)}>
        <TabList mb='2em'>
          {tabList}
        </TabList>
        <TabPanels>{tabPanels}</TabPanels>
      </Tabs>
    </Box>
  );
}

export default AgentProfileTabbedView;