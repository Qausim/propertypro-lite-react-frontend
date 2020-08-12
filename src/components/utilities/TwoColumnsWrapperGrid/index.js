import React from 'react';

import CustomGrid from '../CustomGrid';
import { fillArray } from '../../../utils/arrayUtils';


const TwoColumnsWrapperGrid = (props) => {
  const { children } = props;
  return (
    <CustomGrid
      rowGap='2.5em'
      columnGap='2em'
      colNumber={fillArray(2, 1).concat(2)}
      {...props}
    >
      {children}
    </CustomGrid>
  );
};

export default TwoColumnsWrapperGrid;