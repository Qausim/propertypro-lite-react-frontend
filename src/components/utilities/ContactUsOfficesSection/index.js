import React, { Fragment } from 'react';
import { GrMail } from 'react-icons/gr';
import { FiMapPin } from 'react-icons/fi';
import { MdPhoneInTalk, MdAccessTime } from 'react-icons/md';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/core';

import SectionDivider from '../SectionDivider';
import TwoColumnsWrapperGrid from '../TwoColumnsWrapperGrid';


const ContactUsOfficesSection = ({ px, mt }) => {
  const icons = {
    phone: MdPhoneInTalk, address: FiMapPin, email: GrMail, openHours: MdAccessTime
  };
  const offices = [
    {
      title: 'lagos',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quos libero vitae! Obcaecati,
        reiciendis deleniti nam, recusandae ad repudiandae libero dolorum totam, similique suscipit dolor!
        Veritatis provident necessitatibus, ab iusto, libero autem cum beatae accusantium fuga deserunt
        repellat laudantium qui. Deleniti inventore facilis tempore earum fuga sunt praesentium quaerat
        adipisci rerum alias aspernatur atque odit dolores quam excepturi numquam, voluptatem eligendi
        facere?
      `,
      phone: '+2348199228844',
      email: 'office@example.com',
      address: '22 Bola Ayinde Street, Victoria Island, Lagos, Nigeria',
      openHours: { days: 'monday - friday', time: '9:00 AM - 5:00 PM' },
      image: require('../../../assets/preview-mapz-lagos-cropped.png')
    },
    {
      title: 'abuja',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quos libero vitae! Obcaecati,
        reiciendis deleniti nam, recusandae ad repudiandae libero dolorum totam, similique suscipit dolor!
        Veritatis provident necessitatibus, ab iusto, libero autem cum beatae accusantium fuga deserunt
        repellat laudantium qui. Deleniti inventore facilis tempore earum fuga sunt praesentium quaerat
        adipisci rerum alias aspernatur atque odit dolores quam excepturi numquam, voluptatem eligendi
        facere?
      `,
      phone: '+2348199228844',
      email: 'office@example.com',
      address: '22 Bala Ahmadu Street, Zuba, Abuja, Nigeria',
      openHours: { days: 'monday - friday', time: '9:00 AM - 5:00 PM' },
      image: require('../../../assets/preview-mapz-abuja-cropped.png')
    }
  ];
  return (
    <Box as='section'>
      {
        offices.map((office, index) => {
          const { title, description, phone, email, address, openHours, image } = office;
          return (
            <Fragment key={index}>
              <TwoColumnsWrapperGrid as='section' {...{ px, mt }}>
                <Flex direction='column' fontSize='1.2em'>
                  <Heading as='h2'>{title} office</Heading>
                  <Text
                    mt='2em'
                    fontSize='.85em'
                  >
                    {description}
                  </Text>
                  <TwoColumnsWrapperGrid
                    rowGap='1.5em'
                    columnGap='1em'
                    fontSize='.85em'
                    mt={['2em', 'auto']}
                  >
                    {
                      (() => {
                        const OfficeIcon = ({ icon }) => (
                          <Box
                            mr='.8em'
                            size='2em'
                            as={icon}
                            color='var(--some-blue)'
                          />
                        );

                        return Object.entries({ phone, email, address, openHours }).map(([key, value]) => {
                          const isOpenHours = key === 'openHours';
                          return (
                          <Flex align='center' aria-label={isOpenHours ? 'open hours' : key}>
                            <OfficeIcon icon={icons[key]} />
                            <Box>
                              {
                                (() => {
                                  if (!['phone', 'email', 'openHours'].includes(key)) return '';
                                  let text;
                                  if (key === 'phone') text = 'Call us';
                                  else if (key === 'email') text = 'Have any questions?'
                                  else text = openHours.days;

                                  return (
                                    <>
                                      <Text className={isOpenHours ? 'text--capitalize' : ''}>{text}</Text>
                                    </>
                                  );
                                })()
                              }
                              <Text>{isOpenHours ? value.time : value}</Text>
                            </Box>
                          </Flex>
                        )
                        });
                      })()
                    }
                  </TwoColumnsWrapperGrid>
                </Flex>
                <Image
                  w='100%'
                  minH='70%'
                  alt={title}
                  src={image}
                  objectFit='cover'
                />
              </TwoColumnsWrapperGrid>
              <SectionDivider
                mt='4em'
                mx={px}
              />
            </Fragment>
          );
        })
      }
    </Box>
  );
}

export default ContactUsOfficesSection;