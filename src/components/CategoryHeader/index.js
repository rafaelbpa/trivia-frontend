import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import closeIcon from '~/assets/x-circle.png';

export default function CategoryHeader({ category }) {
  return (
    <Container>
      <span>{category}</span>
      <Link to="/">
        <img src={closeIcon} alt="Fechar" />
        <span>Fechar</span>
      </Link>
    </Container>
  );
}

CategoryHeader.propTypes = {
  category: PropTypes.string.isRequired,
};
