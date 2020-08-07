import React from "react";
import { Home, DollarSign, Flag } from "react-feather";
import { BsPersonPlus, BsPersonCheck } from "react-icons/bs";
import { Box, Heading, Flex, Icon, Button } from "@chakra-ui/core";

import "./HomePage.css";
import { dividerMx } from "../../../utils/uiUtils";
import { fillArray } from "../../../utils/arrayUtils";
import PropertyGrid from "../../utilities/PropertyGrid";
import WhyUsSection from "../../utilities/WhyUsSection";
import SectionDivider from "../../utilities/SectionDivider";
import HomeSearchForm from "../../utilities/HomeSearchForm";
import CitySummaryStats from "../../utilities/CitySummaryStats";
import HomePageExpoSection from "../../utilities/HomePageHeroSection";
import FeaturedPropertiesCarousel from "../../utilities/FeaturedPropertiesCarousel";


const HomePage = () => {
  return (
    <Box className="homepage">
      <Box py="8em" as="section" className="homepage-top text--align-center">
        <p
          className="text--uppercase text--bold"
          style={{
            color: "white",
            marginBottom: ".9em",
            letterSpacing: "4px",
            fontWeight: "600",
          }}
        >
          the intuitive way to
        </p>
        <Heading
          as="h1"
          color="white"
          fontSize="2.8em"
          fontWeight="700"
          px="var(--padding-sm)"
          className="text--capitalize text--bold"
        >
          find your dream home
        </Heading>
        <HomeSearchForm />
      </Box>

      <Box
        py="5em"
        maxW="100vw"
        as="section"
        className="cities-covered"
        px={dividerMx}
      >
        <Heading
          as="h1"
          mb="2em"
          fontSize="2.8em"
          className="text--align-center"
        >
          Explore the Cities
        </Heading>
        <CitySummaryStats />
      </Box>

      <Box
        py="5em"
        maxW="100vw"
        as="section"
        bg="#EDEDED"
        className="featured-properties"
        px={dividerMx}
      >
        <Flex mb="5em" wrap="wrap" align="center" justify="space-between">
          <Heading as="h1" fontSize="2.8em" mb={[...dividerMx, 0]}>
            Featured Properties
          </Heading>
          <p className="text--uppercase d-flex align-center">
            <Icon as={Home} mr="8px" size="32px" className="home-icon" />
            <span className="text--bold">1,300+</span>&nbsp;available properties
          </p>
        </Flex>
        <FeaturedPropertiesCarousel />
      </Box>

      <Box
        py="5em"
        maxW="100vw"
        as="section"
        className="recent-for-sale"
        px={dividerMx}
      >
        <Flex mb="5em" wrap="wrap" align="center" justify="space-between">
          <Heading as="h1" fontSize="2.8em" mb={[...dividerMx, 0]}>
            Recent Properties for Sale
          </Heading>
          <p className="text--uppercase d-flex align-center">
            <Icon as={DollarSign} mr="8px" size="32px" className="home-icon" />
            all properties<span className="text--bold">&nbsp;for sale</span>
          </p>
        </Flex>
        <PropertyGrid
          properties={new Array(4).fill({
            bedroom: 5,
            garage: 2,
            size: 3555,
            term: "day",
            bathroom: 2,
            price: 50000,
            discount: 0.3,
            published: 2020,
            category: "sale",
            title: "15A bolaji olasowe street, Lekki Phase 1, Lagos",
            image: require("../../../assets/pxappliances-architecture-ceiling-chairs-sm.jpg"),
          })}
        />
      </Box>
      <SectionDivider mx={dividerMx} />
      <Box
        py="5em"
        maxW="100vw"
        as="section"
        className="recent-for-rent"
        px={dividerMx}
      >
        <Flex mb="5em" wrap="wrap" align="center" justify="space-between">
          <Heading as="h1" fontSize="2.8em" mb={[...dividerMx, 0]}>
            Recent Properties for Rent
          </Heading>
          <p className="text--uppercase d-flex align-center">
            <Icon as={Flag} mr="8px" size="32px" className="home-icon" />
            all properties for<span className="text--bold">&nbsp;for rent</span>
          </p>
        </Flex>
        <PropertyGrid
          properties={new Array(4).fill({
            bedroom: 5,
            garage: 2,
            size: 3555,
            term: "day",
            bathroom: 2,
            price: 50000,
            discount: 0.3,
            published: 2020,
            category: "sale",
            title: "15A bolaji olasowe street, Lekki Phase 1, Lagos",
            image: require("../../../assets/pxappliances-architecture-ceiling-chairs-sm.jpg"),
          })}
        />
      </Box>
      <SectionDivider mx={dividerMx} />
      <HomePageExpoSection px={dividerMx} />
      <WhyUsSection px={dividerMx} />
      <Flex
        as="section"
        bg="#234DD4"
        color="white"
        px={dividerMx}
        py="var(--padding-md)"
        direction={fillArray(2, "column").concat("row")}
        align={fillArray(2, "center").concat("center")}
        justify={fillArray(2, "center").concat("space-around")}
      >
        {(() => {
          const mb = fillArray(2, "var(--padding-md)").concat("0px");
          return (
            <>
              <Box as={BsPersonCheck} size="120px" {...{ mb }} />
              <Heading as="h2" {...{ mb }}>Become an Agent</Heading>
              <Button
                bg="white"
                color="black"
                borderRadius="0px"
                px="var(--padding-md)"
                className="text--uppercase"
                {...{ mb }}
              >
                <Box size="24px" as={BsPersonPlus} mr="var(--padding-sm)" />
                register
              </Button>
            </>
          );
        })()}
      </Flex>
    </Box>
  );
};

export default HomePage;
