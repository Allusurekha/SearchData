import * as types from "./types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_COMPLETE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
