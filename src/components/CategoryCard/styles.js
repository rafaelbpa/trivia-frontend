import styled from 'styled-components';

export const Container = styled.li`
  background: #fff;
  border: 1px solid #e4e4e6;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  width: 239px;
  height: 104px;

  @media (max-width: 992px) {
    width: 210px;
  }

  @media (max-width: 768px) {
    width: 158px;
  }

  @media (max-width: 576px) {
    width: 165px;
  }

  @media (max-width: 375px) {
    width: 163px;
  }

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const CategoryTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #1e2124;
  margin: 0px 16px 16px 16px;
`;
