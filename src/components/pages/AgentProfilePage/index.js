import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';

import { dividerMx } from '../../../utils/uiUtils';
import CustomGrid from '../../utilities/CustomGrid';
import ContactForm from '../../utilities/ContactForm';
import { fillArray } from '../../../utils/arrayUtils';
import usePageTitle from '../../../hooks/usePageTitle';
import AgentProfileLHS from '../../utilities/AgentProfileLHS';


const AgentProfilePage = () => {
  const agent = {
    type: 'agency',
    name: 'Sundial Properties',
    address: '22 Bolaji Osikeye Street',
    city: 'lagos',
    state: 'lagos',
    country: 'nigeria',
    rcNumber: '990022',
    website: 'https://thisagent.com',
    officialName: 'Bolatito Adeyi',
    mobile: '+23434343344',
    officePhone: '+23434343345',
    image: require('../../../assets/placeholder-agent-logo.jpg'),
    socialLinks: {
      facebook: 'https://facebook.com', twitter: 'https://twitter.com',
      youtube: 'https://youtube.com', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com'
    },
    about: `
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
    listings: [
      {
        garage: 2,
        bedroom: 5,
        size: 3555,
        term: 'day',
        bathroom: 3,
        price: 50000,
        discount: 0.3,
        status: 'sold',
        published: 2020,
        targetType: 'rent',
        slug: 'apartment1',
        category: 'apartments',
        title: 'beautiful family apartment',
        address: '15A bolaji olasowe street, Lekki Phase 1, Lagos',
        createdAt: new Date(new Date().getTime() - 366 * 24 * 3600 * 1000),
        image: require('../../../assets/pxappliances-architecture-ceiling-chairs-lg.jpg'),
        description: `
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae mollitia similique iusto ipsam laudantium,
          quis alias harum magni ad ullam nisi reiciendis quo aperiam beatae enim doloremque illo eos sed quibusdam est
          reprehenderit eum totam laborum porro. Aliquam, soluta facere? Nesciunt quidem quas quos itaque, consequuntur vero!
          Dignissimos omnis harum magnam culpa ducimus sequi dolorum esse natus facilis et voluptates est, earum eveniet,
          repudiandae soluta. Non ut beatae nulla dicta accusamus. Possimus exercitationem tempora itaque explicabo ratione nam enim nostrum!
        `,
      },
      {
        garage: 2,
        bedroom: 5,
        size: 3555,
        term: 'day',
        bathroom: 3,
        price: 50000,
        discount: 0.3,
        status: 'sold',
        published: 2020,
        targetType: 'rent',
        slug: 'apartment2',
        category: 'apartments',
        title: 'beautiful family apartment',
        address: '15A bolaji olasowe street, Lekki Phase 1, Lagos',
        createdAt: new Date(new Date().getTime() - 366 * 24 * 3600 * 1000),
        image: require('../../../assets/pxappliances-architecture-ceiling-chairs-lg.jpg'),
        description: `
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae mollitia similique iusto ipsam laudantium,
          quis alias harum magni ad ullam nisi reiciendis quo aperiam beatae enim doloremque illo eos sed quibusdam est
          reprehenderit eum totam laborum porro. Aliquam, soluta facere? Nesciunt quidem quas quos itaque, consequuntur vero!
          Dignissimos omnis harum magnam culpa ducimus sequi dolorum esse natus facilis et voluptates est, earum eveniet,
          repudiandae soluta. Non ut beatae nulla dicta accusamus. Possimus exercitationem tempora itaque explicabo ratione nam enim nostrum!
        `,
      }
    ],
    reviews: [
      {
        userName: 'oluseyi abolade',
        rating: 3.26,
        reviewText: `
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nulla qui beatae dolor commodi,
          quaerat dolorem. Adipisci optio vitae quidem!
        `
      },
      {
        userName: 'oluseyi abolade',
        rating: 3.26,
        reviewText: `
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nulla qui beatae dolor commodi,
          quaerat dolorem. Adipisci optio vitae quidem!
        `
      }
    ]
  };

  // const agent = {
  //   type: 'agent',
  //   firstName: 'bola',
  //   lastName: 'olaseinde',
  //   address: '22 Bolaji Osikeye Street',
  //   city: 'lagos',
  //   state: 'lagos',
  //   country: 'nigeria',
  //   mobile: '+23434343344',
  //   office: '+23434343345',
  //   image: require('../../../assets/pexels-thyrone-paas-1722198.jpg'),
  //   socialLinks: {
  //     facebook: 'https://facebook.com', twitter: 'https://twitter.com',
  //     youtube: 'https://youtube.com', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com'
  //   },
  //   about: `
  //     Lorem ipsum Lagos dolor sit amet consectetur adipisicing elit. Commodi
  //     excepturi aperiam blanditiis repellendus eaque sapiente accusamus
  //     in illum! Ea omnis iusto quaerat totam, accusantium tempora dolores
  //     reprehenderit eius laudantium placeat!
  //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
  //     dolore quibusdam, inventore aspernatur quidem assumenda aut adipisci
  //     neque beatae fugiat. Porro nihil impedit eveniet quos! Eius architecto
  //     repudiandae odio est provident obcaecati corrupti nobis. Adipisci, labore
  //     architecto at, obcaecati nisi dolores quos corporis accusantium deserunt
  //     ullam unde eaque officia sapiente.
  //   `,
  //   listings: [],
  //   reviews: []
  // };
  const isAgency = agent.type === 'agency';
  const agentName = isAgency ? agent.name : [agent.firstName, agent.lastName].join(' ');
  const agentAddress = [agent.address, agent.city, agent.state, agent.country].join(', ');
  usePageTitle(agentName);

  return (
    <Box className='agent-profile' mt='4em' px={dividerMx} mb='4em'>
      <Heading as='h1' className='text--capitalize'>{agentName}</Heading>
      <Text
        mt='.5em'
        mb='2em'
        className='text--capitalize'
      >
        {agentAddress}
      </Text>
      <CustomGrid
        rowGap='var(--padding-md)'
        colNumber={fillArray(2, 1).concat(12)}
      >
        <AgentProfileLHS
          {...{
            agent, isAgency, agentName, sectionMt: '4em'
          }}
        />
        <Box
          ml='auto'
          mr={fillArray(2, 'auto').concat('0px')}
          my={fillArray(2, '2em').concat('-2.5em')}
          gridColumn={fillArray(2, '1/2').concat('9/13')}
        >
          <Box
            p='var(--padding-sm) 24px'
            pb='var(--padding-md)'
            boxShadow='0 8px 16px rgba(0,0,0,.25)'
          >
            <Heading
              as='h2'
              mb='1em'
              fontSize='2em'
              className='text--capitalize'
            >
              contact form
            </Heading>
            <ContactForm buttonText='contact agent' />
          </Box>
        </Box>
      </CustomGrid>
    </Box>
  );
}

export default AgentProfilePage;