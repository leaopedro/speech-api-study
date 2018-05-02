export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function receiveMessage(message) {
  message.createdAt = Date.now();
  return {
    type: RECEIVE_MESSAGE,
    message,
  };
}

