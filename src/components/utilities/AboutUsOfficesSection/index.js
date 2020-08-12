import React, { useState } from 'react';
import {
  Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Text
} from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import TwoColumnsWrapperGrid from '../TwoColumnsWrapperGrid';


const AboutUsOfficesSection = ({ mt }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const offices = [
    {
      title: 'headquarter',
      description: `
        Lorem ipsum Lagos dolor sit amet consectetur adipisicing elit. Commodi
        excepturi aperiam blanditiis repellendus eaque sapiente accusamus
        in illum! Ea omnis iusto quaerat totam, accusantium tempora dolores
        reprehenderit eius laudantium placeat!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        dolore quibusdam, inventore aspernatur quidem assumenda aut adipisci
        neque beatae fugiat. Porro nihil impedit eveniet quos! Eius architecto
        repudiandae odio est provident obcaecati corrupti nobis. Adipisci, labore
        architecto at, obcaecati nisi dolores quos corporis accusantium deserunt
        ullam unde eaque officia sapiente.
      `,
      image: require('../../../assets/preview-mapz-lagos-cropped.png')
    },
    {
      title: 'abuja office',
      description: `
        Lorem ipsum Abuja dolor sit amet consectetur adipisicing elit. Commodi
        excepturi aperiam blanditiis repellendus eaque sapiente accusamus
        in illum! Ea omnis iusto quaerat totam, accusantium tempora dolores
        reprehenderit eius laudantium placeat!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        dolore quibusdam, inventore aspernatur quidem assumenda aut adipisci
        neque beatae fugiat. Porro nihil impedit eveniet quos! Eius architecto
        repudiandae odio est provident obcaecati corrupti nobis. Adipisci, labore
        architecto at, obcaecati nisi dolores quos corporis accusantium deserunt
        ullam unde eaque officia sapiente.
      `,
      image: require('../../../assets/preview-mapz-abuja-cropped.png')
    },
  ];

  const tabList = [];
  const tabPanels = [];
  offices.forEach(({ title, description }, index) => {
    tabList.push(
      <Tab
        key={index}
        className='text--capitalize'
        _selected={{ bg: 'var(--some-green)', color: 'white' }}
      >
        {title}
      </Tab>
    );
    tabPanels.push(
      <TabPanel key={index}>
        <Text>{description}</Text>
      </TabPanel>
    );
  });

  return (
    <Box
      mt={mt}
      as='section'
      id='offices'
      px={dividerMx}
    >
      <TwoColumnsWrapperGrid>
        <Tabs variant='unstyled' onChange={index => setTabIndex(index)}>
          <Heading as='h2'>office locations</Heading>
          <TabList mb='2em'>
            {tabList}
          </TabList>
          <TabPanels>{tabPanels}</TabPanels>
        </Tabs>
        <Image
          w='100%'
          minH='70%'
          alt={offices[tabIndex].title}
          src={offices[tabIndex].image}
          objectFit='cover'
        />
      </TwoColumnsWrapperGrid>
    </Box>
  );
}

export default AboutUsOfficesSection;
