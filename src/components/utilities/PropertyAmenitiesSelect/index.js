import React from 'react';
import { Select } from '@chakra-ui/core';


const PropertyAmenitiesSelect = ({ bg }) => {
  const amenities = [
    { id: 1, title: '24/7 power supply', value: 'yes' },
    { id: 2, title: 'security', value: 'yes' },
    { id: 3, title: 'balcony', value: 'yes' },
    { id: 4, title: 'basement', value: 'yes' },
    { id: 5, title: 'heating', value: 'no' },
    { id: 13, title: 'cooling', value: 'yes' },
    { id: 6, title: 'cleaning service', value: 'no' },
    { id: 7, title: 'elevator', value: 'yes' },
    { id: 8, title: 'fireplace', value: 'no' },
    { id: 9, title: 'gym', value: 'yes' },
    { id: 10, title: 'pets allowed', value: 'yes' },
    { id: 11, title: 'spa', value: 'yes' },
    { id: 12, title: 'swimming pool', value: 'yes' },
    { id: 15, title: 'parking', value: 'yes' },
    { id: 14, title: 'wheelchair access', value: 'yes' },
  ];

  return (
    <Select
      bg={bg}
      placeholder='Target type'
      className='text--capitalize'
    >
      {
        amenities.map(({ id, title }) => {
          return <option key={id} value={title}>{title}</option>
        })
      }
    </Select>
  );
}

export default PropertyAmenitiesSelect;