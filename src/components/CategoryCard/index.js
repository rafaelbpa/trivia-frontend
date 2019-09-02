import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CategoryCard({ category }) {
  return (
    <Container>
      <h6>{category}</h6>
    </Container>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};
