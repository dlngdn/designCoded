import {  TOGGLE_NAVIGATION } from '../actions/index';

export default function( state = false, action) {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      const toggleState = !state;
      return toggleState;
    default:
      return state;
  }
}
