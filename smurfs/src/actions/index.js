import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_END = 'ADD_END';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_END = 'DELETE_END';

export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_END = 'UPDATE_END';

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

export const addSmurf = ({name, age, height}) => dispatch => {
  const newSmurf = { name, age, height };

  dispatch({ type: ADD_START })

  axios 
    .post(smurfsData, newSmurf)
    .then(response => {
      dispatch({ type: ADD_SUCCESS, payload: response.data });
    })
    .catch(error => {
      alert(error.message, 'Fail to add smurf, try again');
    })
    .finally(() => {
      dispatch({ type: ADD_END });
    });
}

export const deleteSmurf = (id) => dispatch => {

  dispatch({ type: DELETE_START });

  axios
    .delete(smurfsData + '/' + id)
    .then(response => {
      dispatch({ type: DELETE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      alert(error.message, 'Fail to delete smurf, try again');
    })
    .finally(() => {
      dispatch({ type: DELETE_END });
    });
}

export const updateSmurf = (id, { name, age, height }) => dispatch => {
  const updatedSmurf = { name, age, height };

  dispatch({ type: UPDATE_START });

  axios
    .put(smurfsData + '/' + id, updatedSmurf)
    .then(response => {
      dispatch({ type: UPDATE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      alert(error.message, 'Fail to update smurf, try again');
    })
    .finally(() => {
      dispatch({ type: UPDATE_END })
    });
}

