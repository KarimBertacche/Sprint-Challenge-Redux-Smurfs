import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const smurfsData = 'http://localhost:3333/smurfs';

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START })
  axios
    .get(smurfsData)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_FAILURE, payload: error.message });
    });
}
