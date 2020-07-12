import React, { useState } from 'react';
import { Input } from '@chakra-ui/core';


const SearchField = ({ filter, setFilter }) => {
  const [search, setSearch] = useState(filter.search);
  return (
    <Input
      size='lg'
      //flexGrow='1'
      value={search}
      placeholder='Search'
      onChange={({ target: { value } }) => setSearch(value)}
      onBlur={() => setFilter({ ...filter, search })}
    />
  );
};
 
export default SearchField;