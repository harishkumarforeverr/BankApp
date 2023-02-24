const actions = require('../store/actions');
const initialState = [
  { time: Date.now(), amount: 0, type: 'INITIAL', details: 'INITIAL' }
];
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TYPES.WITHDRAW:
      return [
        ...state,
        {
          time: Date.now(),
          amount: action.amount,
          type: 'DEBIT',
          details: action.details
        }
      ];
    case actions.TYPES.DEPOSIT:
      return [
        ...state,
        {
          time: Date.now(),
          amount: action.amount,
          type: 'CREDIT',
          details: action.details
        }
      ];
  }
  return state;
}
export default reducer;
