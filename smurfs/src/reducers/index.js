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
    case types.ADD_START:
      return { ...state, addingSmurf: true };
    case types.ADD_SUCCESS:
      return { ...state, smurfs: action.payload };
    case types.ADD_END:
      return { ...state, addingSmurf: false};
    case types.DELETE_START:
      return { ...state, deletingSmurf: true };
    case types.DELETE_SUCCESS:
      return { ...state, smurfs: action.payload };
    case types.DELETE_END:
      return { ...state, deletingSmurf: false };
    case types.UPDATE_START:
      return { ...state, updatingSmurf: true };
    case types.UPDATE_SUCCESS:
      return { ...state, smurfs: action.payload };
    case types.UPDATE_END:
      return { ...state, updatingSmurf: false };
    default:
      return state;
  }
} 