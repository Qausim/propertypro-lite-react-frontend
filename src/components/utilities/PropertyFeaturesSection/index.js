import React from 'react';
import { GoFoldDown } from 'react-icons/go';
import { Box, Text, Grid, Flex, Heading } from '@chakra-ui/core';
import { MdSecurity, MdViewQuilt, MdFitnessCenter, MdHotTub, MdPets } from 'react-icons/md';
import { FaSortNumericUpAlt, FaSwimmer, FaParking, FaWheelchair, FaAdjust } from 'react-icons/fa';
import { GiPowerLightning, GiVacuumCleaner, GiHotSurface, GiFireplace, GiThermometerCold } from 'react-icons/gi';


const PropertyFeaturesSection = ({ property }) => {
  const icons = {
    '24/7 power supply': GiPowerLightning, security: MdSecurity, basement: GoFoldDown,
    balcony: MdViewQuilt, heating: GiHotSurface, 'cleaning service': GiVacuumCleaner,
    elevator: FaSortNumericUpAlt, fireplace: GiFireplace, gym: MdFitnessCenter,
    'pets allowed': MdPets, spa: MdHotTub, 'swimming pool': FaSwimmer,
    cooling: GiThermometerCold, parking: FaParking, 'wheelchair access': FaWheelchair,
  };

  return (
    <Box
      as='section'
      className='property-features'
    >
      <Heading
        as='h3'
        mb='1.5rem'
        fontSize='1.6rem'
        className='text--capitalize text--bold'
      >
        Facts and Features
      </Heading>
      <Grid
        rowGap='2em'
        columnGap='1em'
        templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
      >
        {
          property.amenities.map(({ id, title, value }) => {
            return (
              <Flex key={id} align='center'>
                {
                  (() => {
                    const iconProps = {
                      size: '2.5em', className: 'icon', mr: 'var(--padding-xs)'
                    };

                    return icons[title] ? (
                      <Box
                        as={icons[title]}
                        {...iconProps}
                      />
                    ) : (
                        <Box
                          as={FaAdjust}
                          {...iconProps}
                        />
                      );
                  })()
                }
                <Box>
                  {
                    (() => {
                      const fontSize = '.9em';
                      return (
                        <>
                          <Text fontSize={fontSize} className='text--uppercase'>{title}</Text>
                          <Text fontSize={fontSize} className='text--capitalize text--bold'>{value}</Text>
                        </>
                      );
                    })()
                  }
                </Box>
              </Flex>
            );
          })
        }
      </Grid>
    </Box>
  );
}

export default PropertyFeaturesSection;