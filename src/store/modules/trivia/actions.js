export function createTriviaDataRequest(categoryId) {
  return {
    type: '@trivia/CREATE_TRIVIA_DATA_REQUEST',
    payload: { categoryId },
  };
}

export function nextQuestionRequest(
  questionNumber,
  category,
  score,
  difficulty,
  guessStreak
) {
  return {
    type: '@trivia/NEXT_QUESTION_REQUEST',
    payload: { questionNumber, category, score, difficulty, guessStreak },
  };
}

export function nextQuestionSuccess(
  questionNumber,
  category,
  score,
  difficulty
) {
  return {
    type: '@trivia/NEXT_QUESTION_SUCCESS',
    payload: { questionNumber, category, score, difficulty },
  };
}
