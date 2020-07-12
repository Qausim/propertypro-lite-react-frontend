import { combineReducers } from 'redux';

import appStateReducer from './appStateModule/reducer';
import propertyReducer from './propertiesModule/reducer';


export default combineReducers({
  appState: appStateReducer,
  properties: propertyReducer
});
