import React from 'react';
import { Box } from 'react-feather';
import { Route } from 'react-router-dom';

import { routes } from '../utils/constants';
import HomePage from '../components/pages/HomePage';
import PropertyDetailsPage from '../components/pages/PropertyDetailsPage';


const AppRoutes = () => {
  return (
    <>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.singleProperty} component={PropertyDetailsPage} /> 
      <Route exact path={routes.properties} component={Box} />
    </>
  );
}
 
export default AppRoutes;