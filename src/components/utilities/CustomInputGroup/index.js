import React from 'react';
import { InputGroup, FormLabel, Flex, Input, InputRightAddon, InputLeftAddon } from '@chakra-ui/core';


const CustomInputGroup = ({ name, size, type, leftAddon, rightAddon }) => {
  return (
    <InputGroup d='flex' flexDir='column' className='custom-input-group'>
      <FormLabel d='block' htmlFor={name}>{name}</FormLabel>
      <Flex className='input-wrapper'>
        {
          leftAddon ? (
            <InputLeftAddon size={size} borderWidth='0px'>
              {leftAddon}
            </InputLeftAddon>
          ) : ''
        }
        <Input
          isRequired
          size={size}
          name={name}
          type={type}
          borderWidth='0px'
          _focus={{ borderWidth: '0px' }}
          _hover={{ borderWidth: '0px' }}
        />
        {
          rightAddon ? (
            <InputRightAddon size={size} bg='transparent' borderWidth='0px'>
              {rightAddon}
            </InputRightAddon>
          ) : ''
        }
      </Flex>
    </InputGroup>
  );
};

export default CustomInputGroup;