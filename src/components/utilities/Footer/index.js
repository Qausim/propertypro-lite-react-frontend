import React, { Fragment } from "react";
//import { Link } from 'react-router-dom';
import { Grid, Box, Stack, Heading, Link } from "@chakra-ui/core";
import { fillArray } from "../../../utils/arrayUtils";
import NewsLetterForm from "../NewsLetterForm";

//import { fillArray } from '../../../utils/arrayUtils';

const Footer = () => {
  return (
    <Box>
      <Grid
        py="4em"
        bg="#303441"
        as="footer"
        rowGap='var(--padding-lg)'
        px={fillArray(2, "var(--padding-lg)").concat("calc(2 * var(--padding-lg))")}
        templateColumns={["repeat(1, 1fr)", ...fillArray(2, "repeat(2, 1fr)"), "repeat(4, 1fr)"]}
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
              { title: "About Us", link: "/" },
              { title: "Contact Us", link: "/" },
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
                mb="var(--padding-lg)"
                className="text--capitalize"
              >
                {footerSection.title}
              </Heading>
              {footerSection.links.map((link, linkInd) => {
                return (
                  <Fragment key={linkInd}>
                    <Link
                      href={link.link}
                      fontSize=".9em"
                      color="#CCCCCC"
                      pb="var(--padding-sm)"
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
            mb="var(--padding-lg)"
            className="text--capitalize"
          >
            subscribe
          </Heading>
          <NewsLetterForm inputBg='#454954' />
        </form>
      </Grid>
    </Box>
  );
};

export default Footer;
