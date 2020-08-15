import React from 'react';

import MinMaxNumberInput from '../MinMaxNumberInput';


const AreaMinMaxFields = ({ min, max }) => {
  const label = 'Area';
  const append = 'sq ft';
  const ariaLabel = 'property area range';
  const placeholder = [min, max].map(value => value).join(' - ');
  return <MinMaxNumberInput {...{ min, max, label, append, ariaLabel, placeholder }} />;
};
 
export default AreaMinMaxFields;