import React from 'react';
import { Box, Text, Grid } from '@chakra-ui/core';

import './PropertyDetailsPage.css';
import { dividerMx } from '../../../utils/uiUtils';
import { fillArray } from '../../../utils/arrayUtils';
import usePageTitle from '../../../hooks/usePageTitle';
import ContactAgentForm from '../../utilities/ContactAgentForm';
import PropertyDetailsLHS from '../../utilities/PropertyDetailsLHS';
import PropertyImagesAndSummary from '../../utilities/PropetyImagesAndSummary';
import PropertyDetailsTopBanner from '../../utilities/PropertyDetailsTopBanner';



const PropertyDetailsPage = () => {
  const property = {
    garage: 2,
    bedroom: 5,
    size: 3555,
    term: 'day',
    bathroom: 3,
    price: 50000,
    discount: 0.3,
    status: 'sold',
    published: 2020,
    category: 'apartments',
    title: 'beautiful family apartment',
    address: '15A bolaji olasowe street, Lekki Phase 1, Lagos',
    createdAt: new Date(new Date().getTime() - 366 * 24 * 3600 * 1000),
    images: new Array(5).fill(require('../../../assets/pxappliances-architecture-ceiling-chairs-lg.jpg')),
    description: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae mollitia similique iusto ipsam laudantium,
      quis alias harum magni ad ullam nisi reiciendis quo aperiam beatae enim doloremque illo eos sed quibusdam est
      reprehenderit eum totam laborum porro. Aliquam, soluta facere? Nesciunt quidem quas quos itaque, consequuntur vero!
      Dignissimos omnis harum magnam culpa ducimus sequi dolorum esse natus facilis et voluptates est, earum eveniet,
      repudiandae soluta. Non ut beatae nulla dicta accusamus. Possimus exercitationem tempora itaque explicabo ratione nam enim nostrum!`,
    agent: {
      verified: false,
      phone: '09011223344',
      officialName: 'john travolta',
      companyName: 'bolaji and sons enterprises',
      logo: require('../../../assets/placeholder-agent-logo.jpg'),
    },
    amenities: [
      { id: 1, title: '24/7 power supply', value: 'yes' },
      { id: 2, title: 'security', value: 'yes' },
      { id: 3, title: 'balcony', value: 'yes' },
      { id: 4, title: 'basement', value: 'yes' },
      { id: 5, title: 'heating', value: 'no' },
      { id: 13, title: 'cooling', value: 'yes' },
      { id: 6, title: 'cleaning service', value: 'no'},
      { id: 7, title: 'elevator', value: 'yes' },
      { id: 8, title: 'fireplace', value: 'no' },
      { id: 9, title: 'gym', value: 'yes' },
      { id: 10, title: 'pets allowed', value: 'yes' },
      { id: 11, title: 'spa', value: 'yes' },
      { id: 12, title: 'swimming pool', value: 'yes' },
      { id: 15, title: 'parking', value: 'yes' },
      { id: 14, title: 'wheelchair access', value: 'yes' },
    ]
  };
  usePageTitle(property.title);
  const sectionPaddingY = '4em'

  return (
    <Box className='property-details'>
      <Text as='h1' pos='absolute' top='-1000px'>{property.title}</Text>
      <PropertyDetailsTopBanner {...{ property }} />
      <PropertyImagesAndSummary {...{ property, py: `calc(${sectionPaddingY} / 2)` }} />
      <Grid
        px={dividerMx}
        py={sectionPaddingY}
        rowGap='var(--padding-md)'
        templateColumns={fillArray(2, 'repeat(1, 1fr)').concat('repeat(12, 1fr)')}
      >
        <PropertyDetailsLHS
          {...{
            property,
            gridColumn: fillArray(2, '1/2').concat('1/9'),
            pr: fillArray(2, '0px').concat('var(--padding-md)')
          }}
        />
        <ContactAgentForm
          ml='auto'
          agent={property.agent}
          mr={fillArray(2, 'auto').concat('0px')}
          my={fillArray(2, '2em').concat('-2.5em')}
          gridColumn={fillArray(2, '1/2').concat('9/13')}
        />
      </Grid>
    </Box>
  );
}

export default PropertyDetailsPage;