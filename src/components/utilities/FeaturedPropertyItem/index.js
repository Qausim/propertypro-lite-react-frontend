import React from "react";
import { Package, Key, Clock, Crop } from "react-feather";
import { Box, Image, Text, Flex, Icon, Tag } from "@chakra-ui/core";

import "./FeaturedPropertyItem.css";
import PropertyTagsWrapper from "../PropertyTagsWrapper";
import { formatMoneyValue } from "../../../utils/textUtils";
import SectionDivider from "../SectionDivider";

const FeaturedPropertyItem = ({ property }) => {
  const childBorder = "1px solid #CCC";
  const icons = {
    rooms: Key,
    size: Crop,
    published: Clock,
    category: Package,
  };

  return (
    <Box bg="white" className="featured-property-item hover-shadow">
      <PropertyTagsWrapper>
        <Tag bg="green.500" color='white'>
          featured
        </Tag>
        <Tag bg='red.500' color='white'>
          {property.category}
        </Tag>
      </PropertyTagsWrapper>
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        borderBottom="none"
        alt={property.name}
        border={childBorder}
        src={property.image}
      />
      <Box borderTop="none" border={childBorder} p="var(--padding-sm)">
        <Text
          mb=".7em"
          fontSize="1.2em"
          className="text--bold text--capitalize"
        >
          {property.title}
        </Text>
        <Flex flexWrap="wrap" color="#666666">
          {["category", "size", "rooms", "published"].map((key, index) => {
            return (
              <Flex mt=".3em" minW="50%" key={index} align="center">
                <Icon as={icons[key]} mr="8px" />
                <Text className={`${key === "size" ? "" : "text--capitalize"}`}>
                  {property[key]}{" "}
                  {key === "rooms" ? key : key === "size" ? "sq ft" : ""}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <SectionDivider mt='2em' mb='1.5em' />
        <Flex align="center" color="#555555">
          {(() => {
            const { discount, price, term } = property;
            const hasDiscount = discount > 0;
            const discountedPrice = (1 - discount) * price;
            const res = [
              <Text
                mr="8px"
                key={1}
                className={`${
                  hasDiscount ? "text--deleted discounted " : "text--bold "
                }`}
              >
                {formatMoneyValue(price)}/{term}
              </Text>,
            ];
            if (hasDiscount) {
              res.push(
                <Text className="text--bold" key={2}>
                  {formatMoneyValue(discountedPrice)}/{term}
                </Text>
              );
            }

            return res;
          })()}
        </Flex>
      </Box>
    </Box>
  );
};

export default FeaturedPropertyItem;
