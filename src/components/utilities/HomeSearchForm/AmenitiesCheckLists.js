import React from 'react';
import CustomGrid from '../CustomGrid';
import { Checkbox, FormLabel, Flex } from '@chakra-ui/core';


const AmenitiesCheckList = ({ amenities = [] }) => {
  return (
    <CustomGrid
      gap='1em'
      colNumber={[2, 3, 4]}
    >
      {
        amenities.map(({ id, title }) => {
          const checkBoxId = `amenity-${id}`;
          return (
            <Flex key={id} align='center'>
              <Checkbox
                mr='1em'
                key={id}
                size='lg'
                value={id}
                id={checkBoxId}
                name={checkBoxId}
                background='white'
              />
              <FormLabel
                color='white'
                htmlFor={checkBoxId}
                className='text--capitalize'
              >
                {title}
              </FormLabel>
            </Flex>
          );
        })
      }
    </CustomGrid>
  );
}

export default AmenitiesCheckList;