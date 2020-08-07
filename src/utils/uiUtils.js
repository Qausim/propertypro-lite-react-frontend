import React from 'react';
import { Button, Icon } from '@chakra-ui/core';
import { ChevronLeft, ChevronRight } from 'react-feather';


export const getDefaultCarouselChevrons = (iconSize = '24px', bg = 'white') => {
  return {
    leftChevron: (
      <Button {...{ bg }} aria-label='previous'>
        <Icon as={ChevronLeft} size={iconSize} />
      </Button>
    ),
    rightChevron: (
      <Button {...{ bg }} aria-label='next'>
        <Icon as={ChevronRight} size={iconSize} />
      </Button>
    )
  };
};

export const dividerMx = ["var(--padding-sm)", "var(--padding-md)"];
