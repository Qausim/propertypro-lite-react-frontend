import React from 'react';

import MinMaxNumberInput from '../MinMaxNumberInput';
import { formatMoneyValue } from '../../../utils/textUtils';


const PriceMinMaxFields = ({ min, max }) => {
  const prepend = '₦';
  const label = 'Price';
  const ariaLabel = 'property price range';
  const placeholder = [min, max].map(amt => `₦ ${formatMoneyValue(amt)}`).join(' - ');
  return <MinMaxNumberInput {...{ min, max, label, prepend, ariaLabel, placeholder }} />;
};
 
export default PriceMinMaxFields;