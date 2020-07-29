import React from 'react';
import { Button, Icon } from '@chakra-ui/core';
import { ChevronLeft, ChevronRight } from 'react-feather';


export const getDefaultCarouselChevrons = (iconSize) => {
  iconSize = iconSize ? iconSize : '24px'
  return {
    leftChevron: (
      <Button>
        <Icon as={ChevronLeft} size={iconSize} />
      </Button>
    ),
    rightChevron: (
      <Button>
        <Icon as={ChevronRight} size={iconSize} />
      </Button>
    )
  };
};
