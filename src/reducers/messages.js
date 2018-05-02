import {RECEIVE_MESSAGE} from '../actions';

const defaultState = {
  messageList: [],
  updatedAt: 0,
};

export default function messages(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      console.log(RECEIVE_MESSAGE, action.message);
      const newSt = Object.assign({}, state);
      newSt.updatedAt = Date.now();
      newSt.messageList.push(action.message);
      return newSt;
    default:
      return state;
  }
}
