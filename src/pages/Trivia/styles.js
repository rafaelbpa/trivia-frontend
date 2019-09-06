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
    width: 149px;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 100%;
    }

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
`;

export const QuestionText = styled.p`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: #1e2124;
  margin-bottom: 3vh;
`;

export const Difficulty = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(52, 60, 88, 0.2);
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  height: 20px;

  span {
    color: #2e354e;
    font-size: 12px;
    line-height: 16px;
    margin: 2px 6px;
  }
`;

export const Stars = styled.div`
  margin-left: 6px;

  img {
    width: 10px;
    height: 10px;
  }
`;
