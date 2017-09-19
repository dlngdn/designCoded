import {  SELECT_DOCUMENT } from '../actions/index';
const docs = [
{
  id: 1,
  name: "Loxodonta"
},
{
  id: 2,
  name: "Panthera leo"
},
{
  id: 3,
  name: "Hyaenidae"
},
{
  id: 4,
  name: "Folivora"
},
{
  id: 5,
  name: "Capra aegagrus hircus"
},
{
  id: 6,
  name: "Acinonyx jubatus",
},
{
  id: 7,
  name: "Canis lupus familiaris",
},
{
  id: 8,
  name: "Chiroptera",
},
{
  id: 9,
  name: "Felis catus"
}
];

const hasBeenSelected = [];
const docData = [ 7, "Canis lupus familiaris", [...docs] ]


export default function( state = docData, action) {
  switch (action.type) {
    case SELECT_DOCUMENT:
      const newData = [action.payload.id, action.payload.name , [...docs]];
      return newData;
    default:
      return state;
  }
}
