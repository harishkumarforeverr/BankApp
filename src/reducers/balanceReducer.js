const initialState = 0;
import { TYPES } from '../store/actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.WITHDRAW:
      return state - action.amount;
    case TYPES.DEPOSIT:
      return state + action.amount;
  }
  return state;
}
export default reducer;
