import { all } from 'redux-saga/effects';

import trivia from './trivia/sagas';

export default function* rootSaga() {
  return yield all([trivia]);
}
