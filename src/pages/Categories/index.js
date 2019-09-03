import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Title, CategoryList } from './styles';

import Header from '~/components/Header';
import CategoryCard from '~/components/CategoryCard';

import api from '~/services/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('api_category.php');

      setCategories(response.data.trivia_categories);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title>Categorias</Title>
        <CategoryList>
          {categories.map(category => (
            <Link to={`/trivia/${category.id}`}>
              <CategoryCard key={category.id} category={category.name} />
            </Link>
          ))}
        </CategoryList>
      </Content>
    </Container>
  );
}
