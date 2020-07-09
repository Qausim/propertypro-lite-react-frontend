import { storeKeys } from "../../utils/constants";


const { example: { actions, state: stateKeys } } = storeKeys;
const initialState = {
  [stateKeys.example]: 'E be things'
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case actions.example:
      return { ...state, [stateKeys.example]: payload };
    default: return state;
  }
};
