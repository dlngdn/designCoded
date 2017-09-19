const initialState = {
  environment: '',
  peopleData: [
    {
      id: 1,
      name: "Megan",
      videoImage: "megan.jpg",
      avatar: "meg-avatar.png",
      fullname: "Megan Broccoli"
    },
    {
      id: 2,
      name: "Rachel",
      videoImage: "rachel.jpg",
      avatar: "rachel-avatar.png",
      fullname: "Rachel Asparagus"
    },
    {
      id: 3,
      name: "Bryan",
      videoImage: "bryan.jpg",
      avatar: "bryan-avatar.png",
      fullname: "Bryan Zucchini"
    }
  ]
}

import {
  GET_INITIAL_DATA, SELECT_DOCUMENT } from '../actions/index';

export default function( state = initialState, action) {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return state;
    default:
      return state;
  }
}
