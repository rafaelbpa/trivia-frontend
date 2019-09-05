import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  BlueWrapper,
  Mascot,
  Congratulations,
  PerformanceBar,
  WhiteWrapper,
  QuestionsSummary,
  CorrectSummary,
  WrongSummary,
  QuestionsDetails,
  QuestionDetail,
  DifficultyDetails,
} from './styles';

import Header from '~/components/Header';

import mascot from '~/assets/mascot.png';

export default function Result({ match }) {
  const { id } = match.params;
  const myId = id - 1;
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [scores, setScores] = useState({});

  const TOTAL_QUESTIONS = 10;

  const trivia = useSelector(state => state.trivia);

  useEffect(() => {
    if (!trivia && !myId) return;
    console.tron.warn(trivia[myId]);

    setCorrectScore(
      trivia[myId].score.easy +
        trivia[myId].score.medium +
        trivia[myId].score.hard
    );
    setWrongScore(TOTAL_QUESTIONS - correctScore);

    setScores({
      easy: {
        correct: trivia[myId].score.easy,
        wrong: TOTAL_QUESTIONS - trivia[myId].score.easy,
      },
      medium: {
        correct: trivia[myId].score.medium,
        wrong: TOTAL_QUESTIONS - trivia[myId].score.medium,
      },
      hard: {
        correct: trivia[myId].score.hard,
        wrong: TOTAL_QUESTIONS - trivia[myId].score.hard,
      },
    });
  }, [correctScore, myId, trivia]);

  return (
    <Container>
      <Header />
      <Content>
        <BlueWrapper>
          <Mascot src={mascot} />
          <Congratulations>
            <large>Parabéns!</large>
            <span>Você finalizou o teste</span>
          </Congratulations>
        </BlueWrapper>
        <PerformanceBar>Veja seu desempenho nas questões</PerformanceBar>
        <WhiteWrapper>
          <QuestionsSummary>
            <CorrectSummary>
              <large>{correctScore}</large>
              <small>acertos</small>
            </CorrectSummary>
            <WrongSummary>
              <large>{wrongScore}</large>
              <small>erros</small>
            </WrongSummary>
          </QuestionsSummary>
          <QuestionsDetails>
            <QuestionDetail>
              <DifficultyDetails>Fácil</DifficultyDetails>
              <span>Acertos: 2</span>
              <span>Erros: 3</span>
            </QuestionDetail>
            <QuestionDetail>
              <DifficultyDetails>Médio</DifficultyDetails>
              <span>Acertos: 2</span>
              <span>Erros: 1</span>
            </QuestionDetail>
            <QuestionDetail>
              <DifficultyDetails>Difícil</DifficultyDetails>
              <span>Acertos: 2</span>
              <span>Erros: 1</span>
            </QuestionDetail>
          </QuestionsDetails>
          <Link to="/">
            <button type="button">Voltar ao início</button>
          </Link>
        </WhiteWrapper>
      </Content>
    </Container>
  );
}

Result.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
