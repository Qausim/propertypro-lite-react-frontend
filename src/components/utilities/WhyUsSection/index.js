import React from "react";
import { BsBuilding } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { Box, Heading, Grid, Flex, Text } from "@chakra-ui/core";
import { fillArray } from "../../../utils/arrayUtils";

const WhyUsSection = ({ px }) => {
  return (
    <Box px={px} py="5em" as="section" color="white" className="why-us-section">
      <Heading
        as="h1"
        fontSize="2.8em"
        fontWeight="700"
        mb="calc(2 * var(--padding-lg))"
        className="text--capitalize text--align-center"
      >
        why choose us
      </Heading>
      <Grid
        columnGap="var(--padding-lg)"
        px={fillArray(2, "var(--padding-lg)").concat(
          "calc(3 * var(--padding-lg))"
        )}
        templateColumns={fillArray(2, "repeat(1, 1fr)").concat(
          "repeat(2, 1fr)"
        )}
      >
        {[
          {
            title: "trusted by thousands",
            text: `
                  10 new offers every day. 350 offers on site, trusted by a community of
                  thousands of users.
                `,
            icon: MdPeopleOutline,
          },
          {
            title: "wide range of properties",
            text: `
                  With a robust selection of popular properties on hand,
                  as well as leading properties from real estate experts.
                `,
            icon: BsBuilding,
          },
        ].map((el, index) => {
          return (
            <Flex
              h="100%"
              key={index}
              color="white"
              align="center"
              p="var(--padding-lg)"
              borderTop="3px solid green"
              direction={fillArray(3, "column").concat("row")}
            >
              <Box
                size="80px"
                as={el.icon}
                mr="var(--padding-lg)"
                mb={fillArray(3, "var(--padding-lg)").concat("0px")}
              />
              <Box width={fillArray(3).concat("70%")}>
                <Heading
                  as="h2"
                  fontSize="1em"
                  mb="var(--padding-md)"
                  textAlign={fillArray(3, 'center').concat('left')}
                  className="text--uppercase"
                >
                  {el.title}
                </Heading>
                <Text>{el.text}</Text>
              </Box>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WhyUsSection;
