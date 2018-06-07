import { combineReducers } from 'redux';

import {
	SELECT_NAVITEM
} from './actions';

function selectedNavItem(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_NAVITEM:
      return action.navitem
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedNavItem
});

export default rootReducer;