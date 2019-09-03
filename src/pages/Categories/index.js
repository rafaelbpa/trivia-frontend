import React from 'react';

import { Container, Content, Title, CategoryList } from './styles';

import Header from '~/components/Header';
import CategoryCard from '~/components/CategoryCard';

export default function Categories() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Categorias</Title>
        <CategoryList>
          <CategoryCard category="Mitologia" />
          <CategoryCard category="Mitologia" />
          <CategoryCard category="Mitologia" />
          <CategoryCard category="Mitologia" />
          <CategoryCard category="Mitologia" />
          <CategoryCard category="Mitologia" />
          <CategoryCard category="Mitologia" />
        </CategoryList>
      </Content>
    </Container>
  );
}
