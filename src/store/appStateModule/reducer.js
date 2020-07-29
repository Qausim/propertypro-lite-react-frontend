import { actionTypes } from "../../utils/constants";


const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: payload };
    default: return state;
  }
};
