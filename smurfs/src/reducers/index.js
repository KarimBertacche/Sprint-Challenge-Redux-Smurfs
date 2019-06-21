import * as types from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_START:
      return { ...state, fetchingSmurfs: true };
    case types.FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, fetSmurfs: false };
    case types.FETCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
} 