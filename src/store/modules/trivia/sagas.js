import { takeLatest, put, all } from 'redux-saga/effects';

import history from '~/services/history';

export function nextQuestionSuccess({ payload }) {
  const { category } = payload;
  history.replace(`/trivia/${category}`);
}

export function* nextQuestionRequest({ payload }) {
  const { questionNumber, category } = payload;
  if (questionNumber > 10) {
    history.push(`/result/${category}`);
  } else {
    yield put(nextQuestionSuccess(payload));
  }
}

export default all([
  takeLatest('@trivia/NEXT_QUESTION_REQUEST', nextQuestionRequest),
]);
