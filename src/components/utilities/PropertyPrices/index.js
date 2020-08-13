import React from 'react';
import { Text } from '@chakra-ui/core';
import { formatMoneyValue } from '../../../utils/textUtils';


const PropertyPrices = ({ property }) => {
  const { discount, price } = property;
  const res = [];
  const hasDiscount = discount > 0;
  res.push((
    <Text
      key={res.length + 1}
      mr={hasDiscount ? 'var(--padding-sm)' : 0}
      className={`${hasDiscount ? `text--deleted ` : ''}price`}
    >
      {formatMoneyValue(price)}
    </Text>
  ));
  if (hasDiscount) res.push(<Text key={res.length + 1} className='price'>{formatMoneyValue(price * (1 - discount))}</Text>);

  return res;
}

export default PropertyPrices;