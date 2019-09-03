import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #e5e5e5;
`;

export const QuestionWrapper = styled.div`
  background: #fff;
  border: 1px solid #e4e4e6;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  max-width: 700px;
  margin: 0 auto;
  padding: 3vh 3vw;
  display: flex;
  flex-direction: column;

  .questionButton {
    background: none;
    margin: 0 0 16px 0;
    padding: 0;
    border: 0;
  }

  .answerButton {
    border-radius: 8px;
    background: #0467db;
    padding: 11px 24px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    align-self: stretch;

    &:disabled {
      background: #c9cccf;
      cursor: not-allowed;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h6 {
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  span {
    background: #343c58;
    border-radius: 14px;
  }
`;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #1e2124;
  margin-bottom: 3vh;
`;
