import {  START_VIDEO, END_VIDEO, SELECT_DOCUMENT } from '../actions/index';

const initial = [false, [{ id: 7, name: "Canis lupus familiaris"}], [] ];

export default function( state = initial, action) {
  switch (action.type) {
    case SELECT_DOCUMENT:
      let selectState = state;
      let newOne = {
        name: action.payload.name,
        id: action.payload.id
      }
      selectState[1].push(newOne);
      if(selectState[0]){
        selectState[2].unshift(newOne);
      }
      return selectState;
    case START_VIDEO:
      let startState = state;
      startState[0] = action.payload;
      let arr = startState[1];
      startState[2].unshift(arr[arr.length -1]);
      return [...startState];
    case END_VIDEO:
      let endState = state;
      endState[0] = action.payload;
      endState[2] = [];
      return [...endState];
    default:
      return state;
  }
}
