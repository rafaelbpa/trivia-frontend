import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import shuffle from 'shuffle-array';

import { Container, QuestionWrapper, Info, QuestionText } from './styles';

import Header from '~/components/Header';
import CategoryHeader from '~/components/CategoryHeader';
import Question from '~/components/Question';
import Feedback from '~/components/Feedback';

import api from '~/services/api';
import history from '~/services/history';

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
    history.push('/results');
  }

  const [questions, setQuestions] = useState([]);
  const [questionTitle, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isNoAnAnswerSelected, setIsNoAnAnswerSelected] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        trivia[id].guesses,
        trivia[id].difficulty
      )
    );
    setIsModalVisible(false);
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
              <span>Dificuldade {trivia[id].difficulty.pt}</span>
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
