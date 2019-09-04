import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import closeIcon from '~/assets/x-circle.png';

export default function CategoryHeader({ category }) {
  return (
    <Container>
      <span>{category}</span>
      <button type="button">
        <img src={closeIcon} alt="Fechar" />
        <span>Fechar</span>
      </button>
    </Container>
  );
}

CategoryHeader.propTypes = {
  category: PropTypes.string.isRequired,
};
