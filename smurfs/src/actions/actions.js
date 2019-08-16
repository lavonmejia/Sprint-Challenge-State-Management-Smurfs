import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axios
      .get(
        "http://localhost:3333/smurfs"
      )
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      });
  };
};

export const postData = (name, age, height) => {
  return dispatch => {
    dispatch({ type: POST_DATA_START });
    
    axios.post("http://localhost:3333/smurfs", {
          name: name,
          age: age,
          height: height
        }
      )
      .then(res => {
        console.log(res)
        console.log("succesful post")
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        console.log("failed post")
        dispatch({ type: POST_DATA_FAILURE, payload: err.response });
      });
  };
};
