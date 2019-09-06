import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #e5e5e5;
`;

export const Content = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 44px;
  line-height: 56px;
  color: #1e2124;
  margin: 48px 12px 32px 12px;
  align-self: flex-start;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  li {
    margin: 12px;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;
