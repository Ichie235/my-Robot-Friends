import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants.js";

const intialState = {
  searchField: "",
};

export const searchRobots = (state = intialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const intialStateRobots = {
  robots: [],
  error: "",
};

export const requestRobots = (state = intialStateRobots, action = {}) => {
  switch (action.type) {

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload , error: "",};

    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
