import React from "react";
import { withRouter, Link as RouterLink } from "react-router-dom";
import { FiPackage, FiKey, FiClock, FiCrop } from "react-icons/fi";
import { Box, Image, Text, Flex, Icon, Tag, Link } from "@chakra-ui/core";

import "./FeaturedPropertyItem.css";
import SectionDivider from "../SectionDivider";
import { routes } from "../../../utils/constants";
import PropertyTagWrapper from "../PropertyTagWrapper";
import { formatMoneyValue } from "../../../utils/textUtils";

const FeaturedPropertyItem = ({ property, history }) => {
  const childBorder = "1px solid #CCC";
  const icons = {
    rooms: FiKey,
    size: FiCrop,
    published: FiClock,
    category: FiPackage,
  };

  return (
    <Link
      d='block'
      bg="white"
      role='link'
      as={RouterLink}
      _hover={{ textDecor: 'none' }}
      to={`${routes.properties}/ldlddldl`}
      className="featured-property-item hover-shadow"
    >
      <PropertyTagWrapper>
        <Tag bg="green.500" color='white'>
          featured
        </Tag>
        <Tag bg='red.500' color='white'>
          {property.category}
        </Tag>
      </PropertyTagWrapper>
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
    </Link>
  );
};

export default withRouter(FeaturedPropertyItem);
