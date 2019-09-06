import React from 'react';
import PropTypes from 'prop-types';

import { Container, CategoryTitle } from './styles';

export default function CategoryCard({ category }) {
  return (
    <Container>
      <CategoryTitle>{category}</CategoryTitle>
    </Container>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
};
