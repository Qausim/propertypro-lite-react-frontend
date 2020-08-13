import React, { Fragment } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Stack, Heading, Link } from "@chakra-ui/core";

import CustomGrid from "../CustomGrid";
import NewsLetterForm from "../NewsLetterForm";
import { fillArray } from "../../../utils/arrayUtils";


const Footer = () => {
  return (
    <Box>
      <CustomGrid
        py="4em"
        bg="#303441"
        as="footer"
        rowGap='var(--padding-md)'
        colNumber={[1, ...fillArray(2, 2), 4]}
        px={fillArray(2, "var(--padding-md)").concat("calc(2 * var(--padding-md))")}
      >
        {[
          {
            title: "popular searches",
            links: [
              { title: "Apartments for Rent", link: "/" },
              { title: "Apartments for Sale", link: "/" },
              { title: "Offices for Rent", link: "/" },
              { title: "Offices for Sale", link: "/" },
            ],
          },
          {
            title: "homely markets",
            links: [
              { title: "Lagos", link: "/" },
              { title: "Abuja", link: "/" },
              { title: "Port Harcourt", link: "/" },
            ],
          },
          {
            title: "quick links",
            links: [
              { title: "About Us", link: "/about" },
              { title: "Contact Us", link: "/contact" },
            ],
          },
        ].map((footerSection, index) => {
          return (
            <Stack
              key={index}
            >
              <Heading
                as="h3"
                color="white"
                fontSize="1.5em"
                marginBottom
                mb="var(--padding-md)"
                className="text--capitalize"
              >
                {footerSection.title}
              </Heading>
              {footerSection.links.map((link, linkInd) => {
                return (
                  <Fragment key={linkInd}>
                    <Link
                      as={RouterLink}
                      to={link.link}
                      fontSize=".9em"
                      color="#CCCCCC"
                      pb="var(--padding-xs)"
                    >
                      {link.title}
                    </Link>
                  </Fragment>
                );
              })}
            </Stack>
          );
        })}
        <form>
          <Heading
            as="h3"
            color="white"
            fontSize="1.5em"
            marginBottom
            mb="var(--padding-md)"
            className="text--capitalize"
          >
            subscribe
          </Heading>
          <NewsLetterForm inputBg='#454954' />
        </form>
      </CustomGrid>
    </Box>
  );
};

export default Footer;
