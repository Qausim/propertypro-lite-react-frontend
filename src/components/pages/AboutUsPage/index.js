import React from 'react';
import { Box, Heading, Grid, Image, Text, Flex } from '@chakra-ui/core';

import './AboutUsPage.css';
import { dividerMx } from '../../../utils/uiUtils';
import usePageTitle from '../../../hooks/usePageTitle';
import SectionDivider from '../../utilities/SectionDivider';
import AboutUsTopNavbar from '../../utilities/AboutUsTopNavbar';
import AboutUsHistorySection from '../../utilities/AboutUsHistorySection';
import AboutUsOfficesSection from '../../utilities/AboutUsOfficesSection';
import AboutUsLeadershipSection from '../../utilities/AboutUsLeadershipSection';
import { fillArray } from '../../../utils/arrayUtils';
import SeeOpportunitiesButtonWrapper from '../../utilities/SeeOpportunitiesButtonWrapper';


const AboutUsPage = () => {
  usePageTitle('about us');
  const sectionMt = '2em';

  const TwoColumnsWrapperGrid = ({ children }) => (
    <Grid
      rowGap='2.5em'
      columnGap='2em'
      templateColumns={fillArray(2, 'repeat(1, 1fr)').concat('repeat(2, 1fr)')}
    >
      {children}
    </Grid>
  );

  return (
    <Box className='about-us-page'>
      <Box
        h='14em'
        d='flex'
        px={dividerMx}
        className='banner'
        alignItems='center'
      >
        <Heading
          as='h1'
          color='white'
          className='text--bold text--capitalize'
        >
          about us
        </Heading>
      </Box>
      <AboutUsTopNavbar mt={sectionMt} />

      <Box
        as='section'
        id='history'
        px={dividerMx}
        mt={sectionMt}
      >
        <Heading as='h2'>company history</Heading>
        <TwoColumnsWrapperGrid>
          <AboutUsHistorySection />
        </TwoColumnsWrapperGrid>
      </Box>

      <AboutUsLeadershipSection mt={sectionMt} />
      <AboutUsOfficesSection mt={sectionMt} />
      <SectionDivider mx={dividerMx} />
      <Box
        as='section'
        px={dividerMx}
        mt={sectionMt}
        id='workspace'
      >
        <TwoColumnsWrapperGrid>
          <Image
            minH='70%'
            objectFit='cover'
            alt='smiling men discussing in a workplace'
            src={require('../../../assets/pexels-just-name-1080793.jpg')}
          />
          <Flex direction='column' fontSize='1.2em'>
            <Heading as='h2'>our workspace</Heading>
            <Text>
              Come be a part of a truly amazing, open, collaborative, and innovative culture.
            </Text>
            <Text
              mt='2em'
              as='small'
              color='gray.600'
              d='inline-block'
            >
              Our people are always working together to build the next big thing, and that
              really keeps this place buzzing. Whether we’re planning projects or grabbing
              a beer at our monthly Happy Hours, we all have a great time here.
            </Text>
            <Box mt={['2em', 'auto']}>
              <SeeOpportunitiesButtonWrapper />
            </Box>
          </Flex>
        </TwoColumnsWrapperGrid>
      </Box>
    </Box>
  );
}

export default AboutUsPage;