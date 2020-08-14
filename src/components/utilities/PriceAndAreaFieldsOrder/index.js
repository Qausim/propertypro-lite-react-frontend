import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { RiArrowUpDownLine } from 'react-icons/ri';
import {
  Box, Popover, PopoverTrigger, Button, PopoverContent, PopoverBody, List, ListItem
} from '@chakra-ui/core';


const PriceAndAreaFieldsOrder = ({ bg }) => {
  const criterion = [
    'newest', 'price (lo-hi)', 'price (hi-lo)', 'lowest area', 'largest area'
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Popover className='text--capitalize'>
      <PopoverTrigger>
        <Button
          bg={bg}
          w='10em'
          rounded='0px'
          color='gray.600'
          className='text--capitalize'
        >
          <Box mr='var(--padding-xs)' as={RiArrowUpDownLine} />
          {
            criterion[activeIndex]
          }
          <Box ml='var(--padding-xs)' as={FaAngleDown} />
        </Button>
      </PopoverTrigger>
      <PopoverContent zIndex={4} maxW='10em' rounded='0px'>
        <PopoverBody p='0px'>
          <List>
            {
              criterion.map((el, index) => (
                <ListItem
                  key={index}
                  className='text--capitalize'
                  onClick={() => setActiveIndex(index)}
                  p='var(--padding-xs) var(--padding-sm)'
                  bg={index === activeIndex ? bg : 'initial'}
                  _hover={{ bg: 'var(--some-green)', color: 'white' }}
                >{criterion[index]}</ListItem>
              ))
            }
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PriceAndAreaFieldsOrder;