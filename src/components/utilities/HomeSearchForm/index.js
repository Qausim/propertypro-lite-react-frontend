import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import {
  Flex, Button, Icon, InputGroup, InputLeftAddon, Box, FormLabel, Input, NumberInput,
  NumberInputField, Select, IconButton, Text, Tooltip
} from '@chakra-ui/core';

import './HomeSearchForm.css';
import CustomGrid from '../CustomGrid';
import SearchField from './SearchField';
import AreaMinMaxFields from '../AreaMinMaxFields';
import PriceMinMaxFields from '../PriceMinMaxFields';
import PropertyTypeRadios from './PropertyTypeRadios';
import { fillArray } from '../../../utils/arrayUtils';
import AmenitiesCheckList from './AmenitiesCheckLists';
import PropertyCategorySelect from './PropertyCategorySelect';
import setPropertyFilter from '../../../store/propertiesModule/actions/setPropertyFilter';


const HomeSearchForm = ({ filter }) => {
  const [expandAdvanced, setExpandAdvanced] = useState(false)
  const dispatch = useDispatch();
  const setFilter = (newFilter) => dispatch(setPropertyFilter(newFilter));
  const childrenProp = { filter, setFilter };
  const amenities = [
    { id: 1, title: '24/7 power supply' },
    { id: 2, title: 'security' },
    { id: 3, title: 'balcony' },
    { id: 4, title: 'basement' },
    { id: 5, title: 'heating' },
    { id: 13, title: 'cooling' },
    { id: 6, title: 'cleaning service' },
    { id: 7, title: 'elevator' },
    { id: 8, title: 'fireplace' },
    { id: 9, title: 'gym' },
    { id: 10, title: 'pets allowed' },
    { id: 11, title: 'spa' },
    { id: 12, title: 'swimming pool' },
    { id: 15, title: 'parking' },
    { id: 14, title: 'wheelchair access' },
  ];

  return (
    <form className='home-search-form' style={{ paddingTop: '4em' }}>
      <PropertyTypeRadios {...childrenProp} />
      <Box pos='relative'>
        <Flex
          flexDir='column'
          p='var(--padding-md)'
          className='form-control-group default-fields'
          mx={fillArray(2, '0px').concat('var(--padding-md)')}
        >
          <PropertyCategorySelect size='lg' {...childrenProp} />
          <SearchField {...childrenProp} />
          <Button
            size='lg'
            color='white'
            bg='var(--some-blue)'
            py='var(--padding-sm)'
            px='var(--padding-md)'
            className='search-button text--capitalize'
          >
            <Icon name='search' mr='var(--padding-xs)' />
            search
          </Button>
          <Flex
            color='white'
            align='center'
            justify='center'
            direction='column'
            onClick={() => setExpandAdvanced(!expandAdvanced)}
          >
            <Text
              display={fillArray(2, 'block').concat('none')}
            >
              {`${expandAdvanced ? 'Hide' : 'See'} advanced fields`}
            </Text>
            <Tooltip
              hasArrow
              bg='transparent'
              placement='bottom'
              color={fillArray(2, 'transparent').concat('white')}
              label={`${expandAdvanced ? 'Hide' : 'See'} advanced fields`}
            >
              <IconButton
                size='32px'
                bg='transparent'
                icon={`triangle-${expandAdvanced ? 'up' : 'down'}`}
                aria-label='toggle advanced search fields visibility'
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
      <Flex
        zIndex={2}
        pos='relative'
        justify='center'
        transition='transform .2s'
        transform={expandAdvanced ? 'scaleY(1)' : 'scaleY(0)'}
      >
        <Box
          pt='2em'
          pb='1em'
          pos='absolute'
          px='var(--padding-md)'
          className='advanced-search-group form-control-group'
          //p='var(--padding-md)'
          mx={fillArray(2, '0px').concat('var(--padding-md)')}
        >
          <AmenitiesCheckList {...{ amenities }} />
          <CustomGrid
            mt='2em'
            gap='2em'
            colNumber={fillArray(2, 1).concat(3)}
          >
            <InputGroup>
              <InputLeftAddon>
                <FormLabel htmlFor='city' className='text--capitalize'>city:</FormLabel>
              </InputLeftAddon>
              <Input
                id='city'
                name='city'
                type='text'
                bg='#EDF2F7'
                placeholder='e.g Lagos'
              />
            </InputGroup>
            <PriceMinMaxFields min={100000} max={20000000} />
            <AreaMinMaxFields min={2000} max={5000} />
            <InputGroup d='flex'>
              <InputLeftAddon>Rooms: </InputLeftAddon>
              <NumberInput flexGrow={1} aria-label='number of bedrooms'>
                <NumberInputField bg='#EDF2F7' />
              </NumberInput>
            </InputGroup>
            <InputGroup d='flex'>
              <InputLeftAddon>Baths: </InputLeftAddon>
              <NumberInput flexGrow={1} aria-label='number of bathrooms'>
                <NumberInputField bg='#EDF2F7' />
              </NumberInput>
            </InputGroup>
            <Select placeholder='Target type' className='text--capitalize'>
              {
                ['rent', 'buy', 'lease'].map((each, index) => {
                  return <option key={index} value={each}>{each}</option>
                })
              }
            </Select>
          </CustomGrid>
        </Box>
      </Flex>
    </form>
  );
};

const mapStateToProps = ({ properties: { filter } }, ownProps) => ({ filter, ...ownProps });

export default connect(mapStateToProps)(HomeSearchForm);