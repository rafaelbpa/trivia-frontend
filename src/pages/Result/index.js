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
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [scores, setScores] = useState({});

  const trivia = useSelector(state => state.trivia);

  useEffect(() => {
    if (!trivia && !id) return;

    setCorrectScore(
      trivia[id].score.correct.easy +
        trivia[id].score.correct.medium +
        trivia[id].score.correct.hard
    );
    setWrongScore(
      trivia[id].score.wrong.easy +
        trivia[id].score.wrong.medium +
        trivia[id].score.wrong.hard
    );

    setScores({
      easy: {
        correct: trivia[id].score.correct.easy,
        wrong: trivia[id].score.wrong.easy,
      },
      medium: {
        correct: trivia[id].score.correct.medium,
        wrong: trivia[id].score.wrong.medium,
      },
      hard: {
        correct: trivia[id].score.correct.hard,
        wrong: trivia[id].score.wrong.hard,
      },
    });
  }, [id, trivia]);

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
              <span>
                Acertos: {scores && scores.easy && scores.easy.correct}
              </span>
              <span>Erros: {scores && scores.easy && scores.easy.wrong}</span>
            </QuestionDetail>
            <QuestionDetail>
              <DifficultyDetails>Médio</DifficultyDetails>
              <span>
                Acertos: {scores && scores.medium && scores.medium.correct}
              </span>
              <span>
                Erros: {scores && scores.medium && scores.medium.wrong}
              </span>
            </QuestionDetail>
            <QuestionDetail>
              <DifficultyDetails>Difícil</DifficultyDetails>
              <span>
                Acertos: {scores && scores.hard && scores.hard.correct}
              </span>
              <span>Erros: {scores && scores.hard && scores.hard.wrong}</span>
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
