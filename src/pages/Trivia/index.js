import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shuffle from 'shuffle-array';

import { Container, QuestionWrapper, Info, QuestionText } from './styles';

import Header from '~/components/Header';
import CategoryHeader from '~/components/CategoryHeader';
import Question from '~/components/Question';
import Feedback from '~/components/Feedback';

import api from '~/services/api';

export default function Trivia({ match }) {
  const { id } = match.params;
  const [questions, setQuestions] = useState([]);
  const [questionTitle, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isNoAnAnswerSelected, setIsNoAnAnswerSelected] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get(`api.php`, {
        params: {
          amount: 1,
          category: id,
          difficulty: 'medium',
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
  }, [id]);

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

  return (
    <Container>
      {isModalVisible && (
        <Feedback isCorrect={correctAnswer === selectedAnswer} />
      )}
      <Header />
      <CategoryHeader category={category} />
      <QuestionWrapper>
        <Info>
          <h6>Questão 1</h6>
          <span>Dificuldade 2</span>
        </Info>
        <QuestionText>{questionTitle}</QuestionText>

        {questions.map(question => (
          <button
            onClick={() => selectQuestion(question)}
            className="questionButton"
            type="button"
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
