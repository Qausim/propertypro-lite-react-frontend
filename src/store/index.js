import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import exampleMiddleware from './middleware/exampleMiddleware';


export default createStore(
  rootReducer, composeWithDevTools(applyMiddleware(exampleMiddleware))
);
