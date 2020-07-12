import React from 'react';
import { Flex, Button, Icon } from '@chakra-ui/core';
import { useDispatch, connect } from 'react-redux';

import './HomeSearchForm.css';
import SearchField from './SearchField';
import PropertyTypeRadios from './PropertyTypeRadios';
import setPropertyFilter from '../../../store/propertiesModule/actions/setPropertyFilter';
import PropertyCategorySelect from './PropertyCategorySelect';


const HomeSearchForm = ({ filter }) => {
  const dispatch = useDispatch();
  const setFilter = (newFilter) => dispatch(setPropertyFilter(newFilter));
  const childrenProp = { filter, setFilter };
  return (
    <form className='home-search-form' style={{ paddingTop: '4em' }}>
      <PropertyTypeRadios {...childrenProp} />
      <Flex 
        flexDir='column'
        py='var(--padding-lg)'
        px='var(--padding-lg)'
        className='form-control-group'
      >
        <PropertyCategorySelect {...childrenProp} />
        <SearchField {...childrenProp} />
        <Button
          size='lg'
          color='white'
          bg='var(--some-blue)'
          py='var(--padding-md)'
          px='var(--padding-lg)'
          className='search-button text--capitalize'
        >
          <Icon name='search' mr='var(--padding-sm)' />
          search
        </Button>
      </Flex>
    </form>
  );
};

const mapStateToProps = ({ properties: { filter } }, ownProps) => ({ filter, ...ownProps });
 
export default connect(mapStateToProps)(HomeSearchForm);