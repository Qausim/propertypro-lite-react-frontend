import React from 'react';
import { Select } from '@chakra-ui/core';


const PropertyCategorySelect = ({ filter, setFilter }) => {
  const categories = [
    { value: 'land', text: 'lands' },
    { value: 'apartment', text: 'apartments' },
    { value: 'office', text: 'office spaces' },
  ];

  return (
    <Select
      size='lg'
      className='text--capitalize'
      onChange={({ target: { value } }) => setFilter({ ...filter, category: value })}
    >
      {
        categories.map(({ value, text }, index) => (
          <option key={index} {...{ value }}>{ text }</option>
        ))
      }
    </Select>
  );
};
 
export default PropertyCategorySelect;