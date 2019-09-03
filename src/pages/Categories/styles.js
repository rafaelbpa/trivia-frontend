import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
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
  margin-top: 48px;
  margin-bottom: 32px;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  li {
    margin-right: 24px;
    margin-bottom: 25px;
    flex-grow: 1;
    flex-shrink: 1;

    :last-child {
      /* margin-right: 0; */
    }
  }
`;
