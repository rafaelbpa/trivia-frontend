import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Question({ isSelected, question }) {
  return (
    <Container isSelected={isSelected}>
      <span dangerouslySetInnerHTML={{ __html: question }} />
    </Container>
  );
}

Question.propTypes = {
  isSelected: PropTypes.bool,
  question: PropTypes.string.isRequired,
};

Question.defaultProps = {
  isSelected: false,
};
