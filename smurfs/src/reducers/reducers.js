import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_DATA_FAILURE,
  POST_DATA_SUCCESS,
  POST_DATA_START
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  isAdding: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case POST_DATA_START:
      console.log('called post_data_start');
      return {
        ...state,
        isAdding: true,
        error: ""
      };
    case POST_DATA_SUCCESS:
        console.log('called post_data_start');
        return {
          ...state,
          isAdding: false,
          smurfs: action.payload,
          error: ""
        };
    default:
      return state;
  }
};
