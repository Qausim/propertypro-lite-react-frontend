import React from 'react';
import { Box } from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import usePageTitle from '../../../hooks/usePageTitle';
import PagePicturedBanner from '../../utilities/PagePicturedBanner';
import FeedbackFormSection from '../../utilities/FeedbackFormSection';
import ContactUsOfficesSection from '../../utilities/ContactUsOfficesSection';


const ContactUsPage = () => {
  const sectionMt = '4em';
  usePageTitle('contact us');
  return (
    <Box className='contact-us-page'>
      <PagePicturedBanner title='contact us' />
      <ContactUsOfficesSection px={dividerMx} mt={sectionMt} />
      <FeedbackFormSection px={dividerMx} mt={sectionMt} />
    </Box>
  );
}

export default ContactUsPage;