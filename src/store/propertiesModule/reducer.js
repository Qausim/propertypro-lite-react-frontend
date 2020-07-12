import { actionTypes } from '../../utils/constants';


const initialValue = {
  filter: {
    type: 'sale',
    category: '',
    search: ''
  }
}

export default (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_PROPERTY_FILTER:
      return { ...state, filter: payload };
    default: return state;
  }
};