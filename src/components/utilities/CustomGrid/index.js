import React from 'react';
import { Grid } from '@chakra-ui/core';


const CustomGrid = (props) => {
  const { colNumber = [1], children } = props;
  const templateColumns = colNumber.map((value) => `repeat(${value}, 1fr)`)
  return (
    <Grid
      {...{
        templateColumns,
        ...props
      }}
    >
      {children}
    </Grid>
  );
}
 
export default CustomGrid;