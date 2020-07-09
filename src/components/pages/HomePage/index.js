import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import exampleAction from '../../../store/exampleModule/actions/exampleAction';
import { storeKeys } from '../../../utils/constants';


const HomePage = () => {
  const dispatch = useDispatch();
  const example = useSelector(({ [storeKeys.example.storeMapName]: state }) => state[storeKeys.example.state.example])
  const doSomething = () => dispatch(exampleAction('O PARI OOOOO!'));
  return (
    <div className="homepage">
      <h1>Welcome to the Homely, your ultimate property finder.</h1>
      <p>{example}</p>
      <button onClick={doSomething}>DO SOMETHING</button>
    </div>
  );
}
 
export default HomePage;