import { combineReducers } from 'redux';
import { memberReducer } from './member';

const allReducers = combineReducers({
  members: memberReducer,
});

export default allReducers;
