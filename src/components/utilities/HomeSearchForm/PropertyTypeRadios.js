import React from "react";
import { RadioGroup, Radio, Flex } from "@chakra-ui/core";

import { propertyStateTypes } from "../../../utils/constants";


const PropertyTypeRadios = ({ filter, setFilter }) => {
  const radioValues = [
    { value: propertyStateTypes.sale, text: "buy" },
    { value: propertyStateTypes.rent, text: "rent" },
    { value: propertyStateTypes.sold, text: "sold" },
  ];

  return (
    <RadioGroup
      as={Flex}
      color='white'
      value={filter.type}
      className="text--capitalize js-center"
      onChange={({ target: { value } }) => setFilter({ ...filter, type: value })}
    >
      {radioValues.map(({ value, text }, index) => (
          <Radio
            key={index}
            {...{ value }}
            py='var(--padding-md)'
            px='var(--padding-lg)'
            className={`${value === filter.type ? 'active ' : ''}text--align-center`}
          >
            {text}
          </Radio>
      ))}
    </RadioGroup>
  );
};

export default PropertyTypeRadios;
