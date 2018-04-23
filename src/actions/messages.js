export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function receiveMessage(message) {
  message.createdAt = Date.now();

  const st = {
    type: RECEIVE_MESSAGE,
    message,
  };
  return st;
}

