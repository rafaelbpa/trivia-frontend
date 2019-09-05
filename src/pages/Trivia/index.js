import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import shuffle from 'shuffle-array';

import {
  Container,
  QuestionWrapper,
  Info,
  QuestionText,
  Difficulty,
  Stars,
} from './styles';

import Header from '~/components/Header';
import CategoryHeader from '~/components/CategoryHeader';
import Question from '~/components/Question';
import Feedback from '~/components/Feedback';

import api from '~/services/api';
import history from '~/services/history';

import star from '~/assets/star.png';

import {
  nextQuestionRequest,
  createTriviaDataRequest,
} from '~/store/modules/trivia/actions';

export default function Trivia({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();

  const trivia = useSelector(state => state.trivia);
  if (!trivia[id]) {
    dispatch(createTriviaDataRequest(id));
  } else if (trivia[id] && trivia[id].questionNumber > 10) {
    history.push(`/result/${id}`);
  }

  const [questions, setQuestions] = useState([]);
  const [questionTitle, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isNoAnAnswerSelected, setIsNoAnAnswerSelected] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [difficulty, setDifficulty] = useState({});

  useEffect(() => {
    async function loadQuestions() {
      if (!trivia[id]) return;
      const response = await api.get(`api.php`, {
        params: {
          amount: 1,
          category: id,
          difficulty: trivia[id].difficulty.en,
          type: 'multiple',
        },
      });

      const data = [
        response.data.results[0].correct_answer,
        ...response.data.results[0].incorrect_answers,
      ];

      setQuestions(shuffle(data));
      setCorrectAnswer(response.data.results[0].correct_answer);
      setQuestionTitle(response.data.results[0].question);
      setCategory(response.data.results[0].category);
    }

    loadQuestions();
  }, [id, trivia]);

  useEffect(() => {
    if (selectedAnswer) {
      setIsNoAnAnswerSelected(false);
    }
  }, [selectedAnswer]);

  function selectQuestion(question) {
    setSelectedAnswer(question);
  }

  function handleAnswer() {
    if (correctAnswer === selectedAnswer) {
      trivia[id].score[trivia[id].difficulty.en] += 1;

      trivia[id].guessStreak.correct += 1;
      trivia[id].guessStreak.wrong = 0;
    } else {
      trivia[id].guessStreak.correct = 0;
      trivia[id].guessStreak.wrong += 1;
    }

    /**
     * User has a correct streak >= 2: increase difficulty (if possible)
     */
    if (
      trivia[id].difficulty.en !== 'hard' &&
      trivia[id].guessStreak.correct === 2
    ) {
      if (trivia[id].difficulty.en === 'easy') {
        setDifficulty({
          en: 'medium',
          pt: 'Médio',
        });
      } else if (trivia[id].difficulty.en === 'medium') {
        setDifficulty({
          en: 'hard',
          pt: 'Difícil',
        });
      }
    }

    /**
     * User has a wrong streak >= 2: decrease difficulty (if possible)
     */
    if (
      trivia[id].difficulty.en !== 'easy' &&
      trivia[id].guessStreak.wrong === 2
    ) {
      if (trivia[id].difficulty.en === 'hard') {
        setDifficulty({
          en: 'medium',
          pt: 'Médio',
        });
      } else if (trivia[id].difficulty.en === 'medium') {
        setDifficulty({
          en: 'easy',
          pt: 'Fácil',
        });
      }
    }

    setIsModalVisible(true);
    // TODO: salva os dados aqui p/ o banco
    /**
    const data = {
      user_answer: selectedAnswer,
      correct_answer: correctAnswer,
      guess_right: selectedAnswer === correctAnswer,

    }
     */
  }

  function nextQuestion() {
    dispatch(
      nextQuestionRequest(
        trivia[id].questionNumber,
        id,
        trivia[id].score,
        difficulty,
        trivia[id].guessStreak
      )
    );
    setIsModalVisible(false);
  }

  function createStarsRender() {
    if (trivia[id].difficulty.en === 'easy') {
      return <img src={star} alt={trivia[id].difficulty.pt} />;
    }
    if (trivia[id].difficulty.en === 'medium') {
      return (
        <>
          <img src={star} alt={trivia[id].difficulty.pt} />
          <img src={star} alt={trivia[id].difficulty.pt} />
        </>
      );
    }
    return (
      <>
        <img src={star} alt={trivia[id].difficulty.pt} />
        <img src={star} alt={trivia[id].difficulty.pt} />
        <img src={star} alt={trivia[id].difficulty.pt} />
      </>
    );
  }

  return (
    <Container>
      {isModalVisible && (
        <Feedback
          goForward={nextQuestion}
          isCorrect={correctAnswer === selectedAnswer}
        />
      )}
      <Header />
      {trivia && trivia[id] && (
        <>
          <CategoryHeader category={category} />
          <QuestionWrapper>
            <Info>
              <h6>Questão {trivia[id].questionNumber}</h6>
              <Difficulty>
                <Stars>{createStarsRender()}</Stars>
                <span>{trivia[id].difficulty.pt}</span>
              </Difficulty>
            </Info>
            <QuestionText>{questionTitle}</QuestionText>

            {questions.map(question => (
              <button
                onClick={() => selectQuestion(question)}
                className="questionButton"
                type="button"
                key={question}
              >
                <Question
                  key={question}
                  question={question}
                  isSelected={selectedAnswer === question}
                />
              </button>
            ))}
            <button
              className="answerButton"
              onClick={handleAnswer}
              disabled={isNoAnAnswerSelected}
              type="button"
            >
              Responder
            </button>
          </QuestionWrapper>
        </>
      )}
    </Container>
  );
}

Trivia.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
