import {  MINIMIZE_VIDEO, MAXIMIZE_VIDEO } from '../actions/index';

export default function( state = false, action) {
  switch (action.type) {
    case MINIMIZE_VIDEO:
      return action.payload;
    case MAXIMIZE_VIDEO:
      return action.payload;
    default:
      return state;
  }
}
