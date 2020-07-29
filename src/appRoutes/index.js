import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import { routes } from '../utils/constants';
import { Box } from 'react-feather';


const AppRoutes = () => {
  return (
    <>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.properties} component={Box} />
    </>
  );
}
 
export default AppRoutes;