export function createTriviaDataRequest(categoryId) {
  return {
    type: '@trivia/CREATE_TRIVIA_DATA_REQUEST',
    payload: { categoryId },
  };
}

export function nextQuestionRequest(
  questionNumber,
  category,
  guesses,
  difficulty
) {
  return {
    type: '@trivia/NEXT_QUESTION_REQUEST',
    payload: { questionNumber, category, guesses, difficulty },
  };
}

export function nextQuestionSuccess(
  questionNumber,
  category,
  guesses,
  difficulty
) {
  return {
    type: '@trivia/NEXT_QUESTION_SUCCESS',
    payload: { questionNumber, category, guesses, difficulty },
  };
}
