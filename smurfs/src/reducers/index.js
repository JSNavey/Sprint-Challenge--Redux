/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  FETCHED,
  ADDING,
  ADDED,
  DELETING,
  DELETED,
  ERROR
} from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this */

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: true
      });
    case FETCHED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false
      });

    case ADDING:
      return Object.assign({}, state, {
        addingSmurfs: true
      });
    case ADDED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        addingSmurfs: false
      });

    case DELETING:
      return Object.assign({}, state, {
        deletingSmurfs: true
      });
    case DELETED:
      return Object.assign({}, state, {
        smurfs: action.payload,
        deletingSmurfs: false
      });

    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        fetchingSmurfs: false,
        addingSmurfs: false,
        updatingSmurfs: false,
        deletingSmurfs: false
      });

    default:
      return state;
  }
};