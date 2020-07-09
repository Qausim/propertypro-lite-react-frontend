import { combineReducers } from 'redux';

import exampleReducer from './exampleModule/exampleReducer';
import { storeKeys } from '../utils/constants';


export default combineReducers({
  [storeKeys.example.storeMapName]: exampleReducer
});
