export function saveQuestionRequest(data) {
  return {
    type: '@trivia/SAVE_QUESTION_REQUEST',
    payload: { data },
  };
}

export function saveQuestionSuccess(data) {
  return {
    type: '@trivia/SAVE_QUESTION_SUCCESS',
    payload: { data },
  };
}
