import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon, Result, Button } from './styles';

import arrowRight from '~/assets/arrow-right.png';

export default function Feedback({ isCorrect }) {
  return (
    <Container isCorrect={isCorrect}>
      <Icon isCorrect={isCorrect} />
      <Result>Você {isCorrect ? 'acertou' : 'errou'}!</Result>
      <Button>
        <span>Avançar</span>
        <img src={arrowRight} alt="Próxima questão" />
      </Button>
    </Container>
  );
}

Feedback.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
};
