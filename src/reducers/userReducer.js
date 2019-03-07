import { LOGIN, SIGNUP } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      return action.payload.data;
  }
  return state;
}
