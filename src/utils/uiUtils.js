import React from 'react';
import { Button, Icon } from '@chakra-ui/core';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


export const getDefaultCarouselChevrons = (iconSize = '24px', bg = 'white') => {
  return {
    leftChevron: (
      <Button {...{ bg }} aria-label='previous'>
        <Icon as={FiChevronLeft} size={iconSize} />
      </Button>
    ),
    rightChevron: (
      <Button {...{ bg }} aria-label='next'>
        <Icon as={FiChevronRight} size={iconSize} />
      </Button>
    )
  };
};

export const dividerMx = ["var(--padding-sm)", "var(--padding-md)"];
