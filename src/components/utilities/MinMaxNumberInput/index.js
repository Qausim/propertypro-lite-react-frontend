import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import {
  Stack, Box, Popover, PopoverTrigger, Button, PopoverContent, PopoverBody, NumberInput,
  NumberInputField, InputLeftAddon, InputGroup, InputRightAddon
} from '@chakra-ui/core';

import CustomGrid from '../CustomGrid';


const MinMaxNumberInput = ({ min, max, append, label, prepend, ariaLabel, placeholder }) => {
  return (
    <Stack>
      <Popover>
        <PopoverTrigger>
          <Button color='gray.600'>
            {label}: {placeholder}
            <Box ml='auto' as={FaAngleDown} />
          </Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverBody>
            <Stack>
              <CustomGrid gap='1em' colNumber={[2]} aria-label={ariaLabel}>
                {
                  [min, max].map((value, index) => (
                    <InputGroup key={index}>
                      {
                        prepend ? <InputLeftAddon>{prepend}</InputLeftAddon> : ''
                      }
                      <NumberInput
                        value={value}
                        aria-label={index ? 'maximum price' : 'minimum price'}
                      >
                        <NumberInputField bg='#EDF2F7' />
                      </NumberInput>
                      {
                        append ? <InputRightAddon>{append}</InputRightAddon> : ''
                      }
                    </InputGroup>
                  ))
                }
              </CustomGrid>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Stack >
  );
}

export default MinMaxNumberInput;