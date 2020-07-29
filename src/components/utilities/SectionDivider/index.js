import React from 'react';
import { Divider } from '@chakra-ui/core';


const SectionDivider = ({ color, mx, mt, mb }) => {
  color = color ? color : '#CCCCCC';
  return (
    <Divider
      {...{ borderColor: color, mx, mt, mb }}
    />
  );
}

export default SectionDivider;