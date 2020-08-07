import React from 'react';
import { Divider } from '@chakra-ui/core';


const SectionDivider = ({ color = '#CCCCCC', opacity, mx, mt, mb }) => {
  return (
    <Divider
      {...{ borderColor: color, opacity, mx, mt, mb }}
    />
  );
}

export default SectionDivider;