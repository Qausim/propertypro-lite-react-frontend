[1mdiff --git a/src/App.css b/src/App.css[m
[1mindex 365ec3d..1dd822d 100644[m
[1m--- a/src/App.css[m
[1m+++ b/src/App.css[m
[36m@@ -18,6 +18,9 @@[m
 [m
 #root > main {[m
   flex-grow: 1;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m#root > main > div:not(.homepage) {[m
   padding-bottom: 2em;[m
 }[m
 [m
[36m@@ -108,6 +111,7 @@[m [mfooter {[m
   display: inline-block;[m
 }[m
 [m
[32m+[m[32m.shadowed,[m
 .hover-shadow:hover {[m
   box-shadow: 0 8px 16px rgba(0,0,0,.25);[m
 }[m
[1mdiff --git a/src/appRoutes/index.js b/src/appRoutes/index.js[m
[1mindex f3e314c..3fe16c6 100644[m
[1m--- a/src/appRoutes/index.js[m
[1m+++ b/src/appRoutes/index.js[m
[36m@@ -1,5 +1,4 @@[m
 import React from 'react';[m
[31m-import { FiBox } from 'react-icons/fi';[m
 import { Route } from 'react-router-dom';[m
 [m
 import { routes } from '../utils/constants';[m
[36m@@ -7,8 +6,9 @@[m [mimport HomePage from '../components/pages/HomePage';[m
 import AboutUsPage from '../components/pages/AboutUsPage';[m
 import AgentListPage from '../components/pages/AgentListPage';[m
 import ContactUsPage from '../components/pages/ContactUsPage'; [m
[31m-import PropertyDetailsPage from '../components/pages/PropertyDetailsPage';[m
 import AgentProfilePage from '../components/pages/AgentProfilePage';[m
[32m+[m[32mimport PropertyGridPage from '../components/pages/PropertyGridPage';[m[41m[m
[32m+[m[32mimport PropertyDetailsPage from '../components/pages/PropertyDetailsPage';[m[41m[m
 [m
 [m
 const AppRoutes = () => {[m
[36m@@ -20,7 +20,7 @@[m [mconst AppRoutes = () => {[m
       <Route exact path={routes.agents} component={AgentListPage} />[m
       <Route exact path={`${routes.agents}/:slug`} component={AgentProfilePage} />[m
       <Route exact path={routes.contact} component={ContactUsPage} />[m
[31m-      <Route exact path={routes.properties} component={FiBox} />[m
[32m+[m[32m      <Route exact path={routes.properties} component={PropertyGridPage} />[m[41m[m
     </>[m
   );[m
 }[m
[1mdiff --git a/src/components/pages/PropertyGridPage/index.js b/src/components/pages/PropertyGridPage/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..d7935d1[m
[1m--- /dev/null[m
[1m+++ b/src/components/pages/PropertyGridPage/index.js[m
[36m@@ -0,0 +1,92 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport { MdRefresh } from 'react-icons/md';[m
[32m+[m[32mimport { Box, Heading, Text, Flex, Button } from '@chakra-ui/core';[m
[32m+[m
[32m+[m[32mimport { dividerMx } from '../../../utils/uiUtils';[m
[32m+[m[32mimport CustomGrid from '../../utilities/CustomGrid';[m
[32m+[m[32mimport { fillArray } from '../../../utils/arrayUtils';[m
[32m+[m[32mimport SectionDivider from '../../utilities/SectionDivider';[m
[32m+[m[32mimport { formatMoneyValue } from '../../../utils/textUtils';[m
[32m+[m[32mimport GridPageSearchForm from '../../utilities/GridPageSearchForm';[m
[32m+[m[32mimport FeaturedPropertyItem from '../../utilities/FeaturedPropertyItem';[m
[32m+[m[32mimport PriceAndAreaFieldsOrder from '../../utilities/PriceAndAreaFieldsOrder';[m
[32m+[m
[32m+[m
[32m+[m[32mconst PropertyGridPage = () => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <Box[m
[32m+[m[32m      mt='5em'[m
[32m+[m[32m      mx={dividerMx}[m
[32m+[m[32m      className='property-grid'[m
[32m+[m[32m    >[m
[32m+[m[32m      <Heading[m
[32m+[m[32m        as='h1'[m
[32m+[m[32m        pos='absolute'[m
[32m+[m[32m        transform='translateY(-1000px)'[m
[32m+[m[32m      >[m
[32m+[m[32m        Properties[m
[32m+[m[32m      </Heading>[m
[32m+[m[32m      <GridPageSearchForm[m
[32m+[m[32m        p='1em'[m
[32m+[m[32m        inputBackground='#EDF2F7'[m
[32m+[m[32m      />[m
[32m+[m[32m      <Box[m
[32m+[m[32m        mt='5em'[m
[32m+[m[32m        as='section'[m
[32m+[m[32m      >[m
[32m+[m[32m        <CustomGrid[m
[32m+[m[32m          gap='1em'[m
[32m+[m[32m          colNumber={fillArray(2, 1).concat(2)}[m
[32m+[m[32m        >[m
[32m+[m[32m          <Flex direction='column' justify='center' align='start'>[m
[32m+[m[32m            <Heading as='h2'>Properties</Heading>[m
[32m+[m[32m            <Text fontSize='.9em'>{formatMoneyValue(30000)} results</Text>[m
[32m+[m[32m          </Flex>[m
[32m+[m[32m          <Flex[m
[32m+[m[32m            ml={fillArray(2, '0px').concat('auto')}[m
[32m+[m[32m          >[m
[32m+[m[32m            <Button[m
[32m+[m[32m              p='0px'[m
[32m+[m[32m              mr='1em'[m
[32m+[m[32m              bg='transparent'[m
[32m+[m[32m              color='gray.600'[m
[32m+[m[32m              _hover={{ bg: 'transparent' }}[m
[32m+[m[32m            >[m
[32m+[m[32m              <Box[m
[32m+[m[32m                size='24px'[m
[32m+[m[32m                as={MdRefresh}[m
[32m+[m[32m                mr='var(--padding-xs)'[m
[32m+[m[32m              />[m
[32m+[m[32m              <Text>Reset search</Text>[m
[32m+[m[32m            </Button>[m
[32m+[m[32m            <PriceAndAreaFieldsOrder />[m
[32m+[m[32m          </Flex>[m
[32m+[m[32m        </CustomGrid>[m
[32m+[m[32m        <CustomGrid[m
[32m+[m[32m          mt='2em'[m
[32m+[m[32m          gap='2em'[m
[32m+[m[32m          colNumber={[1, 2, 3]}[m
[32m+[m[32m        >[m
[32m+[m[32m          {[m
[32m+[m[32m            new Array(9).fill({[m
[32m+[m[32m              bedroom: 5,[m
[32m+[m[32m              garage: 2,[m
[32m+[m[32m              size: 3555,[m
[32m+[m[32m              term: "day",[m
[32m+[m[32m              bathroom: 2,[m
[32m+[m[32m              price: 50000,[m
[32m+[m[32m              discount: 0.3,[m
[32m+[m[32m              published: 2020,[m
[32m+[m[32m              category: "sale",[m
[32m+[m[32m              title: "15A bolaji olasowe street, Lekki Phase 1, Lagos",[m
[32m+[m[32m              image: require("../../../assets/pxappliances-architecture-ceiling-chairs-sm.jpg"),[m
[32m+[m[32m            }).map((property, index) => <FeaturedPropertyItem key={index} {...{ property }} />)[m
[32m+[m[32m          }[m
[32m+[m[32m        </CustomGrid>[m
[32m+[m[32m      </Box>[m
[32m+[m[32m      <SectionDivider mt='2.5em' mb='2.5em' />[m
[32m+[m[32m    </Box>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default PropertyGridPage;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/AreaMinMaxFields/index.js b/src/components/utilities/AreaMinMaxFields/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..7111dcc[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/AreaMinMaxFields/index.js[m
[36m@@ -0,0 +1,14 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m
[32m+[m[32mimport MinMaxNumberInput from '../MinMaxNumberInput';[m
[32m+[m
[32m+[m
[32m+[m[32mconst AreaMinMaxFields = ({ min, max }) => {[m
[32m+[m[32m  const label = 'Area';[m
[32m+[m[32m  const append = 'sq ft';[m
[32m+[m[32m  const ariaLabel = 'property area range';[m
[32m+[m[32m  const placeholder = [min, max].map(value => value).join(' - ');[m
[32m+[m[32m  return <MinMaxNumberInput {...{ min, max, label, append, ariaLabel, placeholder }} />;[m
[32m+[m[32m};[m
[32m+[m[41m [m
[32m+[m[32mexport default AreaMinMaxFields;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/FeaturedPropertyItem/index.js b/src/components/utilities/FeaturedPropertyItem/index.js[m
[1mindex ca86c27..7c990d4 100644[m
[1m--- a/src/components/utilities/FeaturedPropertyItem/index.js[m
[1m+++ b/src/components/utilities/FeaturedPropertyItem/index.js[m
[36m@@ -1,13 +1,15 @@[m
 import React from "react";[m
[32m+[m[32mimport { withRouter, Link as RouterLink } from "react-router-dom";[m[41m[m
 import { FiPackage, FiKey, FiClock, FiCrop } from "react-icons/fi";[m
[31m-import { Box, Image, Text, Flex, Icon, Tag } from "@chakra-ui/core";[m
[32m+[m[32mimport { Box, Image, Text, Flex, Icon, Tag, Link } from "@chakra-ui/core";[m[41m[m
 [m
 import "./FeaturedPropertyItem.css";[m
[32m+[m[32mimport SectionDivider from "../SectionDivider";[m[41m[m
[32m+[m[32mimport { routes } from "../../../utils/constants";[m[41m[m
 import PropertyTagWrapper from "../PropertyTagWrapper";[m
 import { formatMoneyValue } from "../../../utils/textUtils";[m
[31m-import SectionDivider from "../SectionDivider";[m
 [m
[31m-const FeaturedPropertyItem = ({ property }) => {[m
[32m+[m[32mconst FeaturedPropertyItem = ({ property, history }) => {[m[41m[m
   const childBorder = "1px solid #CCC";[m
   const icons = {[m
     rooms: FiKey,[m
[36m@@ -17,7 +19,15 @@[m [mconst FeaturedPropertyItem = ({ property }) => {[m
   };[m
 [m
   return ([m
[31m-    <Box bg="white" className="featured-property-item hover-shadow">[m
[32m+[m[32m    <Link[m[41m[m
[32m+[m[32m      d='block'[m[41m[m
[32m+[m[32m      bg="white"[m[41m[m
[32m+[m[32m      role='link'[m[41m[m
[32m+[m[32m      as={RouterLink}[m[41m[m
[32m+[m[32m      _hover={{ textDecor: 'none' }}[m[41m[m
[32m+[m[32m      to={`${routes.properties}/ldlddldl`}[m[41m[m
[32m+[m[32m      className="featured-property-item hover-shadow"[m[41m[m
[32m+[m[32m    >[m[41m[m
       <PropertyTagWrapper>[m
         <Tag bg="green.500" color='white'>[m
           featured[m
[36m@@ -85,8 +95,8 @@[m [mconst FeaturedPropertyItem = ({ property }) => {[m
           })()}[m
         </Flex>[m
       </Box>[m
[31m-    </Box>[m
[32m+[m[32m    </Link>[m[41m[m
   );[m
 };[m
 [m
[31m-export default FeaturedPropertyItem;[m
[32m+[m[32mexport default withRouter(FeaturedPropertyItem);[m[41m[m
[1mdiff --git a/src/components/utilities/GridPageSearchForm/index.js b/src/components/utilities/GridPageSearchForm/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..b8284c1[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/GridPageSearchForm/index.js[m
[36m@@ -0,0 +1,64 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport { InputGroup, InputLeftAddon, FormLabel, Input, NumberInput, NumberInputField, Select } from '@chakra-ui/core';[m
[32m+[m
[32m+[m[32mimport CustomGrid from '../CustomGrid';[m
[32m+[m[32mimport AreaMinMaxFields from '../AreaMinMaxFields';[m
[32m+[m[32mimport PriceMinMaxFields from '../PriceMinMaxFields';[m
[32m+[m[32mimport { fillArray } from '../../../utils/arrayUtils';[m
[32m+[m[32mimport PropertyAmenitiesSelect from '../PropertyAmenitiesSelect';[m
[32m+[m[32mimport PropertyCategorySelect from '../HomeSearchForm/PropertyCategorySelect';[m
[32m+[m
[32m+[m
[32m+[m[32mconst GridPageSearchForm = ({ p, inputBackground }) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <CustomGrid[m
[32m+[m[32m      p={p}[m
[32m+[m[32m      gap='1em'[m
[32m+[m[32m      as='form'[m
[32m+[m[32m      className='shadowed'[m
[32m+[m[32m      colNumber={[1, ...fillArray(2, 2), 4]}[m
[32m+[m[32m    >[m
[32m+[m[32m      <InputGroup>[m
[32m+[m[32m        <InputLeftAddon>[m
[32m+[m[32m          <FormLabel htmlFor='city' className='text--capitalize'>city:</FormLabel>[m
[32m+[m[32m        </InputLeftAddon>[m
[32m+[m[32m        <Input[m
[32m+[m[32m          id='city'[m
[32m+[m[32m          name='city'[m
[32m+[m[32m          type='text'[m
[32m+[m[32m          bg={inputBackground}[m
[32m+[m[32m          placeholder='e.g Lagos'[m
[32m+[m[32m        />[m
[32m+[m[32m      </InputGroup>[m
[32m+[m[32m      <PropertyCategorySelect bg={inputBackground} />[m
[32m+[m[32m      <PriceMinMaxFields min={100000} max={20000000} />[m
[32m+[m[32m      <AreaMinMaxFields min={2000} max={5000} />[m
[32m+[m[32m      <InputGroup d='flex'>[m
[32m+[m[32m        <InputLeftAddon>Rooms: </InputLeftAddon>[m
[32m+[m[32m        <NumberInput flexGrow={1} aria-label='number of bedrooms'>[m
[32m+[m[32m          <NumberInputField bg={inputBackground} />[m
[32m+[m[32m        </NumberInput>[m
[32m+[m[32m      </InputGroup>[m
[32m+[m[32m      <InputGroup d='flex'>[m
[32m+[m[32m        <InputLeftAddon>Baths: </InputLeftAddon>[m
[32m+[m[32m        <NumberInput flexGrow={1} aria-label='number of bathrooms'>[m
[32m+[m[32m          <NumberInputField bg={inputBackground} />[m
[32m+[m[32m        </NumberInput>[m
[32m+[m[32m      </InputGroup>[m
[32m+[m[32m      <Select[m
[32m+[m[32m        bg={inputBackground}[m
[32m+[m[32m        placeholder='Target type'[m
[32m+[m[32m        className='text--capitalize'[m
[32m+[m[32m      >[m
[32m+[m[32m        {[m
[32m+[m[32m          ['rent', 'buy', 'lease'].map((each, index) => {[m
[32m+[m[32m            return <option key={index} value={each}>{each}</option>[m
[32m+[m[32m          })[m
[32m+[m[32m        }[m
[32m+[m[32m      </Select>[m
[32m+[m[32m      <PropertyAmenitiesSelect bg={inputBackground} />[m
[32m+[m[32m    </CustomGrid>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default GridPageSearchForm;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/HomeSearchForm/AmenitiesCheckLists.js b/src/components/utilities/HomeSearchForm/AmenitiesCheckLists.js[m
[1mnew file mode 100644[m
[1mindex 0000000..8b57e42[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/HomeSearchForm/AmenitiesCheckLists.js[m
[36m@@ -0,0 +1,43 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport CustomGrid from '../CustomGrid';[m
[32m+[m[32mimport { Checkbox, FormLabel, Flex } from '@chakra-ui/core';[m
[32m+[m
[32m+[m
[32m+[m[32mconst AmenitiesCheckList = ({ amenities = [] }) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    //<Flex justify='center'>[m
[32m+[m[32m      <CustomGrid[m
[32m+[m[32m        gap='1em'[m
[32m+[m[32m        colNumber={[2, 3, 4]}[m
[32m+[m[32m      >[m
[32m+[m[32m        {[m
[32m+[m[32m          amenities.map(({ id, title }) => {[m
[32m+[m[32m            const checkBoxId = `amenity-${id}`;[m
[32m+[m[32m            return ([m
[32m+[m[32m              <Flex key={id} align='center'>[m
[32m+[m[32m                <Checkbox[m
[32m+[m[32m                  mr='1em'[m
[32m+[m[32m                  key={id}[m
[32m+[m[32m                  size='lg'[m
[32m+[m[32m                  value={id}[m
[32m+[m[32m                  id={checkBoxId}[m
[32m+[m[32m                  name={checkBoxId}[m
[32m+[m[32m                  background='white'[m
[32m+[m[32m                />[m
[32m+[m[32m                <FormLabel[m
[32m+[m[32m                  color='white'[m
[32m+[m[32m                  htmlFor={checkBoxId}[m
[32m+[m[32m                  className='text--capitalize'[m
[32m+[m[32m                >[m
[32m+[m[32m                  {title}[m
[32m+[m[32m                </FormLabel>[m
[32m+[m[32m              </Flex>[m
[32m+[m[32m            );[m
[32m+[m[32m          })[m
[32m+[m[32m        }[m
[32m+[m[32m      </CustomGrid>[m
[32m+[m[32m    //</Flex>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default AmenitiesCheckList;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/HomeSearchForm/HomeSearchForm.css b/src/components/utilities/HomeSearchForm/HomeSearchForm.css[m
[1mindex 0a9983d..2b4cde7 100644[m
[1m--- a/src/components/utilities/HomeSearchForm/HomeSearchForm.css[m
[1m+++ b/src/components/utilities/HomeSearchForm/HomeSearchForm.css[m
[36m@@ -17,7 +17,8 @@[m
 }[m
 [m
 .home-search-form [role='radiogroup'] .active,[m
[31m-.home-search-form .form-control-group {[m
[32m+[m[32m.home-search-form .form-control-group,[m[41m[m
[32m+[m[32m.home-search-form .advanced-search-group {[m[41m[m
   background: rgba(51, 54, 57, .8);[m
 }[m
 [m
[36m@@ -55,11 +56,11 @@[m
     flex-direction: row;[m
   }[m
 [m
[31m-  .home-search-form .form-control-group > * {[m
[32m+[m[32m  .home-search-form .form-control-group.default-fields > * {[m[41m[m
     margin-bottom: 0px;[m
   }[m
 [m
[31m-  .home-search-form .form-control-group > :first-child {[m
[32m+[m[32m  .home-search-form .form-control-group.default-fields > :first-child {[m[41m[m
     width: 30%;[m
   }[m
 [m
[36m@@ -67,7 +68,7 @@[m
     width: 25%;[m
   }[m
   [m
[31m-  .home-search-form .form-control-group > :not(:last-child) {[m
[32m+[m[32m  .home-search-form .form-control-group.default-fields > :not(:last-child) {[m[41m[m
     margin-right: var(--padding-md);[m
   }[m
 }[m
[1mdiff --git a/src/components/utilities/HomeSearchForm/PropertyCategorySelect.js b/src/components/utilities/HomeSearchForm/PropertyCategorySelect.js[m
[1mindex dce4e73..2793179 100644[m
[1m--- a/src/components/utilities/HomeSearchForm/PropertyCategorySelect.js[m
[1m+++ b/src/components/utilities/HomeSearchForm/PropertyCategorySelect.js[m
[36m@@ -2,7 +2,7 @@[m [mimport React from 'react';[m
 import { Select } from '@chakra-ui/core';[m
 [m
 [m
[31m-const PropertyCategorySelect = ({ filter, setFilter }) => {[m
[32m+[m[32mconst PropertyCategorySelect = ({ bg, size, filter, setFilter }) => {[m[41m[m
   const categories = [[m
     { value: 'land', text: 'lands' },[m
     { value: 'apartment', text: 'apartments' },[m
[36m@@ -11,7 +11,8 @@[m [mconst PropertyCategorySelect = ({ filter, setFilter }) => {[m
 [m
   return ([m
     <Select[m
[31m-      size='lg'[m
[32m+[m[32m      bg={bg}[m[41m[m
[32m+[m[32m      size={size}[m[41m[m
       className='text--capitalize'[m
       onChange={({ target: { value } }) => setFilter({ ...filter, category: value })}[m
     >[m
[1mdiff --git a/src/components/utilities/HomeSearchForm/index.js b/src/components/utilities/HomeSearchForm/index.js[m
[1mindex 7890681..81c4845 100644[m
[1m--- a/src/components/utilities/HomeSearchForm/index.js[m
[1m+++ b/src/components/utilities/HomeSearchForm/index.js[m
[36m@@ -1,44 +1,160 @@[m
[31m-import React from 'react';[m
[31m-import { Flex, Button, Icon } from '@chakra-ui/core';[m
[32m+[m[32mimport React, { useState } from 'react';[m[41m[m
 import { useDispatch, connect } from 'react-redux';[m
[32m+[m[32mimport {[m[41m[m
[32m+[m[32m  Flex, Button, Icon, InputGroup, InputLeftAddon, Box, FormLabel, Input, NumberInput,[m[41m[m
[32m+[m[32m  NumberInputField, Select, IconButton, Text, Tooltip[m[41m[m
[32m+[m[32m} from '@chakra-ui/core';[m[41m[m
 [m
 import './HomeSearchForm.css';[m
[32m+[m[32mimport CustomGrid from '../CustomGrid';[m[41m[m
 import SearchField from './SearchField';[m
[32m+[m[32mimport { dividerMx } from '../../../utils/uiUtils';[m[41m[m
[32m+[m[32mimport AreaMinMaxFields from '../AreaMinMaxFields';[m[41m[m
[32m+[m[32mimport PriceMinMaxFields from '../PriceMinMaxFields';[m[41m[m
 import PropertyTypeRadios from './PropertyTypeRadios';[m
[31m-import setPropertyFilter from '../../../store/propertiesModule/actions/setPropertyFilter';[m
[32m+[m[32mimport { fillArray } from '../../../utils/arrayUtils';[m[41m[m
[32m+[m[32mimport AmenitiesCheckList from './AmenitiesCheckLists';[m[41m[m
 import PropertyCategorySelect from './PropertyCategorySelect';[m
[32m+[m[32mimport setPropertyFilter from '../../../store/propertiesModule/actions/setPropertyFilter';[m[41m[m
 [m
 [m
 const HomeSearchForm = ({ filter }) => {[m
[32m+[m[32m  const [expandAdvanced, setExpandAdvanced] = useState(false)[m[41m[m
   const dispatch = useDispatch();[m
   const setFilter = (newFilter) => dispatch(setPropertyFilter(newFilter));[m
   const childrenProp = { filter, setFilter };[m
[32m+[m[32m  const amenities = [[m[41m[m
[32m+[m[32m    { id: 1, title: '24/7 power supply' },[m[41m[m
[32m+[m[32m    { id: 2, title: 'security' },[m[41m[m
[32m+[m[32m    { id: 3, title: 'balcony' },[m[41m[m
[32m+[m[32m    { id: 4, title: 'basement' },[m[41m[m
[32m+[m[32m    { id: 5, title: 'heating' },[m[41m[m
[32m+[m[32m    { id: 13, title: 'cooling' },[m[41m[m
[32m+[m[32m    { id: 6, title: 'cleaning service' },[m[41m[m
[32m+[m[32m    { id: 7, title: 'elevator' },[m[41m[m
[32m+[m[32m    { id: 8, title: 'fireplace' },[m[41m[m
[32m+[m[32m    { id: 9, title: 'gym' },[m[41m[m
[32m+[m[32m    { id: 10, title: 'pets allowed' },[m[41m[m
[32m+[m[32m    { id: 11, title: 'spa' },[m[41m[m
[32m+[m[32m    { id: 12, title: 'swimming pool' },[m[41m[m
[32m+[m[32m    { id: 15, title: 'parking' },[m[41m[m
[32m+[m[32m    { id: 14, title: 'wheelchair access' },[m[41m[m
[32m+[m[32m  ];[m[41m[m
[32m+[m[41m[m
   return ([m
     <form className='home-search-form' style={{ paddingTop: '4em' }}>[m
       <PropertyTypeRadios {...childrenProp} />[m
[31m-      <Flex [m
[31m-        flexDir='column'[m
[31m-        p='var(--padding-md)'[m
[31m-        className='form-control-group'[m
[32m+[m[32m      <Box pos='relative'>[m[41m[m
[32m+[m[32m        <Flex[m[41m[m
[32m+[m[32m          flexDir='column'[m[41m[m
[32m+[m[32m          p='var(--padding-md)'[m[41m[m
[32m+[m[32m          className='form-control-group default-fields'[m[41m[m
[32m+[m[32m          mx={fillArray(2, '0px').concat('var(--padding-md)')}[m[41m[m
[32m+[m[32m        >[m[41m[m
[32m+[m[32m          <PropertyCategorySelect size='lg' {...childrenProp} />[m[41m[m
[32m+[m[32m          <SearchField {...childrenProp} />[m[41m[m
[32m+[m[32m          <Button[m[41m[m
[32m+[m[32m            size='lg'[m[41m[m
[32m+[m[32m            color='white'[m[41m[m
[32m+[m[32m            bg='var(--some-blue)'[m[41m[m
[32m+[m[32m            py='var(--padding-sm)'[m[41m[m
[32m+[m[32m            px='var(--padding-md)'[m[41m[m
[32m+[m[32m            className='search-button text--capitalize'[m[41m[m
[32m+[m[32m          >[m[41m[m
[32m+[m[32m            <Icon name='search' mr='var(--padding-xs)' />[m[41m[m
[32m+[m[32m            search[m[41m[m
[32m+[m[32m          </Button>[m[41m[m
[32m+[m[32m          <Flex[m[41m[m
[32m+[m[32m            color='white'[m[41m[m
[32m+[m[32m            align='center'[m[41m[m
[32m+[m[32m            justify='center'[m[41m[m
[32m+[m[32m            direction='column'[m[41m[m
[32m+[m[32m            onClick={() => setExpandAdvanced(!expandAdvanced)}[m[41m[m
[32m+[m[32m          >[m[41m[m
[32m+[m[32m            <Text[m[41m[m
[32m+[m[32m              display={fillArray(2, 'block').concat('none')}[m[41m[m
[32m+[m[32m            >[m[41m[m
[32m+[m[32m              {`${expandAdvanced ? 'Hide' : 'See'} advanced fields`}[m[41m[m
[32m+[m[32m            </Text>[m[41m[m
[32m+[m[32m            <Tooltip[m[41m[m
[32m+[m[32m              hasArrow[m[41m[m
[32m+[m[32m              bg='transparent'[m[41m[m
[32m+[m[32m              placement='bottom'[m[41m[m
[32m+[m[32m              color={fillArray(2, 'transparent').concat('white')}[m[41m[m
[32m+[m[32m              label={`${expandAdvanced ? 'Hide' : 'See'} advanced fields`}[m[41m[m
[32m+[m[32m            >[m[41m[m
[32m+[m[32m              <IconButton[m[41m[m
[32m+[m[32m                size='32px'[m[41m[m
[32m+[m[32m                bg='transparent'[m[41m[m
[32m+[m[32m                icon={`triangle-${expandAdvanced ? 'up' : 'down'}`}[m[41m[m
[32m+[m[32m                aria-label='toggle advanced search fields visibility'[m[41m[m
[32m+[m[32m              />[m[41m[m
[32m+[m[32m            </Tooltip>[m[41m[m
[32m+[m[32m          </Flex>[m[41m[m
[32m+[m[32m        </Flex>[m[41m[m
[32m+[m[32m      </Box>[m[41m[m
[32m+[m[32m      <Flex[m[41m[m
[32m+[m[32m        zIndex={2}[m[41m[m
[32m+[m[32m        pos='relative'[m[41m[m
[32m+[m[32m        justify='center'[m[41m[m
[32m+[m[32m        transition='transform .2s'[m[41m[m
[32m+[m[32m        transform={expandAdvanced ? 'scaleY(1)' : 'scaleY(0)'}[m[41m[m
       >[m
[31m-        <PropertyCategorySelect {...childrenProp} />[m
[31m-        <SearchField {...childrenProp} />[m
[31m-        <Button[m
[31m-          size='lg'[m
[31m-          color='white'[m
[31m-          bg='var(--some-blue)'[m
[31m-          py='var(--padding-sm)'[m
[31m-          px='var(--padding-md)'[m
[31m-          className='search-button text--capitalize'[m
[32m+[m[32m        <Box[m[41m[m
[32m+[m[32m          pt='2em'[m[41m[m
[32m+[m[32m          pb='1em'[m[41m[m
[32m+[m[32m          pos='absolute'[m[41m[m
[32m+[m[32m          px={['0px'].concat(dividerMx)}[m[41m[m
[32m+[m[32m          className='advanced-search-group form-control-group'[m[41m[m
[32m+[m[32m          //p='var(--padding-md)'[m[41m[m
[32m+[m[32m          mx={fillArray(2, '0px').concat('var(--padding-md)')}[m[41m[m
         >[m
[31m-          <Icon name='search' mr='var(--padding-xs)' />[m
[31m-          search[m
[31m-        </Button>[m
[32m+[m[32m          <AmenitiesCheckList {...{ amenities }} />[m[41m[m
[32m+[m[32m          <CustomGrid[m[41m[m
[32m+[m[32m            mt='2em'[m[41m[m
[32m+[m[32m            gap='2em'[m[41m[m
[32m+[m[32m            colNumber={fillArray(2, 1).concat(3)}[m[41m[m
[32m+[m[32m          >[m[41m[m
[32m+[m[32m            <InputGroup>[m[41m[m
[32m+[m[32m              <InputLeftAddon>[m[41m[m
[32m+[m[32m                <FormLabel htmlFor='city' className='text--capitalize'>city:</FormLabel>[m[41m[m
[32m+[m[32m              </InputLeftAddon>[m[41m[m
[32m+[m[32m              <Input[m[41m[m
[32m+[m[32m                id='city'[m[41m[m
[32m+[m[32m                name='city'[m[41m[m
[32m+[m[32m                type='text'[m[41m[m
[32m+[m[32m                bg='#EDF2F7'[m[41m[m
[32m+[m[32m                placeholder='e.g Lagos'[m[41m[m
[32m+[m[32m              />[m[41m[m
[32m+[m[32m            </InputGroup>[m[41m[m
[32m+[m[32m            <PriceMinMaxFields min={100000} max={20000000} />[m[41m[m
[32m+[m[32m            <AreaMinMaxFields min={2000} max={5000} />[m[41m[m
[32m+[m[32m            <InputGroup d='flex'>[m[41m[m
[32m+[m[32m              <InputLeftAddon>Rooms: </InputLeftAddon>[m[41m[m
[32m+[m[32m              <NumberInput flexGrow={1} aria-label='number of bedrooms'>[m[41m[m
[32m+[m[32m                <NumberInputField bg='#EDF2F7' />[m[41m[m
[32m+[m[32m              </NumberInput>[m[41m[m
[32m+[m[32m            </InputGroup>[m[41m[m
[32m+[m[32m            <InputGroup d='flex'>[m[41m[m
[32m+[m[32m              <InputLeftAddon>Baths: </InputLeftAddon>[m[41m[m
[32m+[m[32m              <NumberInput flexGrow={1} aria-label='number of bathrooms'>[m[41m[m
[32m+[m[32m                <NumberInputField bg='#EDF2F7' />[m[41m[m
[32m+[m[32m              </NumberInput>[m[41m[m
[32m+[m[32m            </InputGroup>[m[41m[m
[32m+[m[32m            <Select placeholder='Target type' className='text--capitalize'>[m[41m[m
[32m+[m[32m              {[m[41m[m
[32m+[m[32m                ['rent', 'buy', 'lease'].map((each, index) => {[m[41m[m
[32m+[m[32m                  return <option key={index} value={each}>{each}</option>[m[41m[m
[32m+[m[32m                })[m[41m[m
[32m+[m[32m              }[m[41m[m
[32m+[m[32m            </Select>[m[41m[m
[32m+[m[32m          </CustomGrid>[m[41m[m
[32m+[m[32m        </Box>[m[41m[m
       </Flex>[m
     </form>[m
   );[m
 };[m
 [m
 const mapStateToProps = ({ properties: { filter } }, ownProps) => ({ filter, ...ownProps });[m
[31m- [m
[32m+[m[41m[m
 export default connect(mapStateToProps)(HomeSearchForm);[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/MinMaxNumberInput/index.js b/src/components/utilities/MinMaxNumberInput/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..d932ebb[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/MinMaxNumberInput/index.js[m
[36m@@ -0,0 +1,52 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport { FaAngleDown } from 'react-icons/fa';[m
[32m+[m[32mimport {[m
[32m+[m[32m  Stack, Box, Popover, PopoverTrigger, Button, PopoverContent, PopoverBody, NumberInput,[m
[32m+[m[32m  NumberInputField, InputLeftAddon, InputGroup, InputRightAddon[m
[32m+[m[32m} from '@chakra-ui/core';[m
[32m+[m
[32m+[m[32mimport CustomGrid from '../CustomGrid';[m
[32m+[m
[32m+[m
[32m+[m[32mconst MinMaxNumberInput = ({ min, max, append, label, prepend, ariaLabel, placeholder }) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <Stack>[m
[32m+[m[32m      <Popover>[m
[32m+[m[32m        <PopoverTrigger>[m
[32m+[m[32m          <Button color='gray.600'>[m
[32m+[m[32m            {label}: {placeholder}[m
[32m+[m[32m            <Box ml='auto' as={FaAngleDown} />[m
[32m+[m[32m          </Button>[m
[32m+[m[32m        </PopoverTrigger>[m
[32m+[m[32m        <PopoverContent zIndex={4}>[m
[32m+[m[32m          <PopoverBody>[m
[32m+[m[32m            <Stack>[m
[32m+[m[32m              <CustomGrid gap='1em' colNumber={[2]} aria-label={ariaLabel}>[m
[32m+[m[32m                {[m
[32m+[m[32m                  [min, max].map((value, index) => ([m
[32m+[m[32m                    <InputGroup key={index}>[m
[32m+[m[32m                      {[m
[32m+[m[32m                        prepend ? <InputLeftAddon>{prepend}</InputLeftAddon> : ''[m
[32m+[m[32m                      }[m
[32m+[m[32m                      <NumberInput[m
[32m+[m[32m                        value={value}[m
[32m+[m[32m                        aria-label={index ? 'maximum price' : 'minimum price'}[m
[32m+[m[32m                      >[m
[32m+[m[32m                        <NumberInputField bg='#EDF2F7' />[m
[32m+[m[32m                      </NumberInput>[m
[32m+[m[32m                      {[m
[32m+[m[32m                        append ? <InputRightAddon>{append}</InputRightAddon> : ''[m
[32m+[m[32m                      }[m
[32m+[m[32m                    </InputGroup>[m
[32m+[m[32m                  ))[m
[32m+[m[32m                }[m
[32m+[m[32m              </CustomGrid>[m
[32m+[m[32m            </Stack>[m
[32m+[m[32m          </PopoverBody>[m
[32m+[m[32m        </PopoverContent>[m
[32m+[m[32m      </Popover>[m
[32m+[m[32m    </Stack >[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default MinMaxNumberInput;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/PriceAndAreaFieldsOrder/index.js b/src/components/utilities/PriceAndAreaFieldsOrder/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..972d646[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/PriceAndAreaFieldsOrder/index.js[m
[36m@@ -0,0 +1,53 @@[m
[32m+[m[32mimport React, { useState } from 'react';[m
[32m+[m[32mimport { FaAngleDown } from 'react-icons/fa';[m
[32m+[m[32mimport { RiArrowUpDownLine } from 'react-icons/ri';[m
[32m+[m[32mimport {[m
[32m+[m[32m  Box, Popover, PopoverTrigger, Button, PopoverContent, PopoverBody, List, ListItem[m
[32m+[m[32m} from '@chakra-ui/core';[m
[32m+[m
[32m+[m
[32m+[m[32mconst PriceAndAreaFieldsOrder = ({ bg }) => {[m
[32m+[m[32m  const criterion = [[m
[32m+[m[32m    'newest', 'price (lo-hi)', 'price (hi-lo)', 'lowest area', 'largest area'[m
[32m+[m[32m  ];[m
[32m+[m[32m  const [activeIndex, setActiveIndex] = useState(0);[m
[32m+[m[32m  return ([m
[32m+[m[32m    <Popover className='text--capitalize'>[m
[32m+[m[32m      <PopoverTrigger>[m
[32m+[m[32m        <Button[m
[32m+[m[32m          bg={bg}[m
[32m+[m[32m          w='10em'[m
[32m+[m[32m          rounded='0px'[m
[32m+[m[32m          color='gray.600'[m
[32m+[m[32m          className='text--capitalize'[m
[32m+[m[32m        >[m
[32m+[m[32m          <Box mr='var(--padding-xs)' as={RiArrowUpDownLine} />[m
[32m+[m[32m          {[m
[32m+[m[32m            criterion[activeIndex][m
[32m+[m[32m          }[m
[32m+[m[32m          <Box ml='var(--padding-xs)' as={FaAngleDown} />[m
[32m+[m[32m        </Button>[m
[32m+[m[32m      </PopoverTrigger>[m
[32m+[m[32m      <PopoverContent zIndex={4} maxW='10em' rounded='0px'>[m
[32m+[m[32m        <PopoverBody p='0px'>[m
[32m+[m[32m          <List>[m
[32m+[m[32m            {[m
[32m+[m[32m              criterion.map((el, index) => ([m
[32m+[m[32m                <ListItem[m
[32m+[m[32m                  key={index}[m
[32m+[m[32m                  className='text--capitalize'[m
[32m+[m[32m                  onClick={() => setActiveIndex(index)}[m
[32m+[m[32m                  p='var(--padding-xs) var(--padding-sm)'[m
[32m+[m[32m                  bg={index === activeIndex ? bg : 'initial'}[m
[32m+[m[32m                  _hover={{ bg: 'var(--some-green)', color: 'white' }}[m
[32m+[m[32m                >{criterion[index]}</ListItem>[m
[32m+[m[32m              ))[m
[32m+[m[32m            }[m
[32m+[m[32m          </List>[m
[32m+[m[32m        </PopoverBody>[m
[32m+[m[32m      </PopoverContent>[m
[32m+[m[32m    </Popover>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default PriceAndAreaFieldsOrder;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/PriceMinMaxFields/index.js b/src/components/utilities/PriceMinMaxFields/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..09c901c[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/PriceMinMaxFields/index.js[m
[36m@@ -0,0 +1,15 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m
[32m+[m[32mimport MinMaxNumberInput from '../MinMaxNumberInput';[m
[32m+[m[32mimport { formatMoneyValue } from '../../../utils/textUtils';[m
[32m+[m
[32m+[m
[32m+[m[32mconst PriceMinMaxFields = ({ min, max }) => {[m
[32m+[m[32m  const prepend = '₦';[m
[32m+[m[32m  const label = 'Price';[m
[32m+[m[32m  const ariaLabel = 'property price range';[m
[32m+[m[32m  const placeholder = [min, max].map(amt => `₦ ${formatMoneyValue(amt)}`).join(' - ');[m
[32m+[m[32m  return <MinMaxNumberInput {...{ min, max, label, prepend, ariaLabel, placeholder }} />;[m
[32m+[m[32m};[m
[32m+[m[41m [m
[32m+[m[32mexport default PriceMinMaxFields;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/PropertyAmenitiesSelect/index.js b/src/components/utilities/PropertyAmenitiesSelect/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..245617b[m
[1m--- /dev/null[m
[1m+++ b/src/components/utilities/PropertyAmenitiesSelect/index.js[m
[36m@@ -0,0 +1,39 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m[32mimport { Select } from '@chakra-ui/core';[m
[32m+[m
[32m+[m
[32m+[m[32mconst PropertyAmenitiesSelect = ({ bg }) => {[m
[32m+[m[32m  const amenities = [[m
[32m+[m[32m    { id: 1, title: '24/7 power supply', value: 'yes' },[m
[32m+[m[32m    { id: 2, title: 'security', value: 'yes' },[m
[32m+[m[32m    { id: 3, title: 'balcony', value: 'yes' },[m
[32m+[m[32m    { id: 4, title: 'basement', value: 'yes' },[m
[32m+[m[32m    { id: 5, title: 'heating', value: 'no' },[m
[32m+[m[32m    { id: 13, title: 'cooling', value: 'yes' },[m
[32m+[m[32m    { id: 6, title: 'cleaning service', value: 'no' },[m
[32m+[m[32m    { id: 7, title: 'elevator', value: 'yes' },[m
[32m+[m[32m    { id: 8, title: 'fireplace', value: 'no' },[m
[32m+[m[32m    { id: 9, title: 'gym', value: 'yes' },[m
[32m+[m[32m    { id: 10, title: 'pets allowed', value: 'yes' },[m
[32m+[m[32m    { id: 11, title: 'spa', value: 'yes' },[m
[32m+[m[32m    { id: 12, title: 'swimming pool', value: 'yes' },[m
[32m+[m[32m    { id: 15, title: 'parking', value: 'yes' },[m
[32m+[m[32m    { id: 14, title: 'wheelchair access', value: 'yes' },[m
[32m+[m[32m  ];[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <Select[m
[32m+[m[32m      bg={bg}[m
[32m+[m[32m      placeholder='Target type'[m
[32m+[m[32m      className='text--capitalize'[m
[32m+[m[32m    >[m
[32m+[m[32m      {[m
[32m+[m[32m        amenities.map(({ id, title }) => {[m
[32m+[m[32m          return <option key={id} value={title}>{title}</option>[m
[32m+[m[32m        })[m
[32m+[m[32m      }[m
[32m+[m[32m    </Select>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mexport default PropertyAmenitiesSelect;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/utilities/PropertyGrid/index.js b/src/components/utilities/PropertyGrid/index.js[m
[1mindex e60e1cc..ab02673 100644[m
[1m--- a/src/components/utilities/PropertyGrid/index.js[m
[1m+++ b/src/components/utilities/PropertyGrid/index.js[m
[36m@@ -18,7 +18,7 @@[m [mconst PropertyGrid = ({ properties } = { properties: [] }) => {[m
     <CustomGrid[m
       className="property-grid"[m
       rowGap='var(--padding-md)'[m
[31m-      colNumber={[1, ...fillArray(3, 2).concat(4)]}[m
[32m+[m[32m      colNumber={[1, 1, ...fillArray(2, 2).concat(4)]}[m[41m[m
     >[m
       {properties.map((property, index) => {[m
         return ([m
