// Use this below if combining multiple reducers
// import { combineReducers } from "redux";

const NAME = (state = STATE, action) => {

if (action.type === 'TYPE') {
return RETURNSTATEMENT;
}
// If action.type is anything else, it'll just return the last value of state.
return state;
}


// const NAMETWO = (state = STATE, action) => {

//   if (action.type === 'TYPE') {
//   return RETURNSTATEMENT;
//   }
//   // If action.type is anything else, it'll just return the last value of state.
//   return state;
//   }


export default NAME;

// Use this instead if combining multiple reducers
// export default combineReducers({
//   NAME,
//   NAMETWO
// });