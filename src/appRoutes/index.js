import React from 'react';
import { FiBox } from 'react-icons/fi';
import { Route } from 'react-router-dom';

import { routes } from '../utils/constants';
import HomePage from '../components/pages/HomePage';
import AboutUsPage from '../components/pages/AboutUsPage';
import AgentListPage from '../components/pages/AgentListPage';
import ContactUsPage from '../components/pages/ContactUsPage'; 
import PropertyDetailsPage from '../components/pages/PropertyDetailsPage';
import AgentProfilePage from '../components/pages/AgentProfilePage';


const AppRoutes = () => {
  return (
    <>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.singleProperty} component={PropertyDetailsPage} />
      <Route exact path={routes.about} component={AboutUsPage} />
      <Route exact path={routes.agents} component={AgentListPage} />
      <Route exact path={`${routes.agents}/:slug`} component={AgentProfilePage} />
      <Route exact path={routes.contact} component={ContactUsPage} />
      <Route exact path={routes.properties} component={FiBox} />
    </>
  );
}
 
export default AppRoutes;