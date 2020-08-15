import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  InputGroup, InputLeftAddon, FormLabel, Input, NumberInput, NumberInputField, Select
} from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';
import AreaMinMaxFields from '../AreaMinMaxFields';
import PriceMinMaxFields from '../PriceMinMaxFields';
import { fillArray } from '../../../utils/arrayUtils';
import PropertyAmenitiesSelect from '../PropertyAmenitiesSelect';
import PropertyCategorySelect from '../HomeSearchForm/PropertyCategorySelect';
import { breakdownQueryParams } from '../../../utils/textUtils';


const GridPageSearchForm = ({ p, history: { location: { search } }, inputBackground }) => {
  const queryParams = breakdownQueryParams(search);
  return (
    <CustomGrid
      p={p}
      gap='1em'
      as='form'
      className='shadowed'
      colNumber={[1, ...fillArray(2, 2), 4]}
    >
      <InputGroup>
        <InputLeftAddon>
          <FormLabel htmlFor='city' className='text--capitalize'>city:</FormLabel>
        </InputLeftAddon>
        <Input
          id='city'
          name='city'
          type='text'
          bg={inputBackground}
          placeholder='e.g Lagos'
          value={queryParams.city || ''}
          onChange={() => {}}
        />
      </InputGroup>
      <PropertyCategorySelect bg={inputBackground} />
      <PriceMinMaxFields min={100000} max={20000000} />
      <AreaMinMaxFields min={2000} max={5000} />
      <InputGroup d='flex'>
        <InputLeftAddon>Rooms: </InputLeftAddon>
        <NumberInput flexGrow={1} aria-label='number of bedrooms'>
          <NumberInputField bg={inputBackground} />
        </NumberInput>
      </InputGroup>
      <InputGroup d='flex'>
        <InputLeftAddon>Baths: </InputLeftAddon>
        <NumberInput flexGrow={1} aria-label='number of bathrooms'>
          <NumberInputField bg={inputBackground} />
        </NumberInput>
      </InputGroup>
      <Select
        bg={inputBackground}
        placeholder='Target type'
        className='text--capitalize'
      >
        {
          ['rent', 'buy', 'lease'].map((each, index) => {
            return <option key={index} value={each}>{each}</option>
          })
        }
      </Select>
      <PropertyAmenitiesSelect bg={inputBackground} />
    </CustomGrid>
  );
}

export default withRouter(GridPageSearchForm);