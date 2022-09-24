const NAME = (state = STATE, action) => {

if (action.type === 'TYPE') {
return RETURNSTATEMENT;
}
// If action.type is anything else, it'll just return the last value of state.
return state;
}
export default NAME;