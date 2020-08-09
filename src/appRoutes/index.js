import React from 'react';
import { FiBox } from 'react-icons/fi';
import { Route } from 'react-router-dom';

import { routes } from '../utils/constants';
import HomePage from '../components/pages/HomePage';
import AboutUsPage from '../components/pages/AboutUsPage';
import PropertyDetailsPage from '../components/pages/PropertyDetailsPage';


const AppRoutes = () => {
  return (
    <>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.singleProperty} component={PropertyDetailsPage} /> 
      <Route exact path={routes.about} component={AboutUsPage} /> 
      <Route exact path={routes.properties} component={FiBox} />
    </>
  );
}
 
export default AppRoutes;