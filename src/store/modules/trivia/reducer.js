import produce from 'immer';

const INITIAL_STATE = [];

export default function trivia(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@trivia/CREATE_TRIVIA_DATA_REQUEST':
        draft[action.payload.categoryId] = {
          questionNumber: 1,
          category: action.payload.categoryId,
          difficulty: {
            pt: 'Médio',
            en: 'medium',
          },
          guesses: {
            easy: 0,
            medium: 0,
            hard: 0,
          },
        };
        break;
      case '@trivia/NEXT_QUESTION_REQUEST':
        draft[action.payload.category].questionNumber += 1;
        draft[action.payload.category].category = action.payload.category;
        draft[action.payload.category].difficulty = action.payload.difficulty;
        draft[action.payload.category].guesses = action.payload.guesses;
        break;
      case '@trivia/NEXT_QUESTION_SUCCESS':
        draft[action.payload.category].questionNumber += 1;
        draft[action.payload.category].category = action.payload.category;
        draft[action.payload.category].difficulty = action.payload.difficulty;
        draft[action.payload.category].guesses = action.payload.guesses;
        break;
      default:
    }
  });
}
