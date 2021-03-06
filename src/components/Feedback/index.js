import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Icon, Result, Button } from './styles';

import arrowRight from '~/assets/arrow-right.png';

export default function Feedback({ isCorrect, goForward }) {
  return (
    <Wrapper data-testid="feedback">
      <Container isCorrect={isCorrect}>
        <Icon isCorrect={isCorrect} />
        <Result>Você {isCorrect ? 'acertou' : 'errou'}!</Result>
        <Button type="button" onClick={goForward}>
          <span>Avançar</span>
          <img src={arrowRight} alt="Próxima questão" />
        </Button>
      </Container>
    </Wrapper>
  );
}

Feedback.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  goForward: PropTypes.func.isRequired,
};
