import React, { Component } from 'react';
import Axios from 'axios';

import { baseURL as apiUrl } from '../utils/constants';


const withHttp = (ChildComponent, baseURL = apiUrl) => {
  return class extends Component {
    http = Axios.create({ baseURL });

    render() {
      const { http, props } = this;
      return <ChildComponent {...{ ...props, http } } />;
    }
  };
};

export default withHttp;