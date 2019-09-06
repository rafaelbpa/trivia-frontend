import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #e5e5e5;
`;

export const Content = styled.div`
  max-width: 534px;
  margin: 0 auto;
  padding: 63px 0 72px 0;
  @media (max-width: 375px) {
    padding: 0;
  }
`;

export const PerformanceBar = styled.div`
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #343c58;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 8px 6px;
  font-weight: bold;

  display: block;
  position: absolute;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  @media (max-width: 375px) {
    width: 252px;
  }
`;

export const BlueWrapper = styled.div`
  background: #438de4;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 75px;
  border-top-left-radius: 7.04px;
  border-top-right-radius: 7.04px;
`;

export const Mascot = styled.img`
  margin-right: 25px;
`;

export const Congratulations = styled.div`
  display: flex;
  flex-direction: column;

  large {
    color: #fff;
    font-size: 36px;
    line-height: 48px;
  }

  span {
    color: #fff;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const WhiteWrapper = styled.div`
  background: #fff;
  border: 0.88px solid #e4e4e6;
  box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
  border-bottom-left-radius: 7.04px;
  border-bottom-right-radius: 7.04px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background: #0467db;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
      padding: 11px 24px;

      color: #fff;
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      @media (max-width: 375px) {
        width: 100%;
      }
    }
  }
`;

export const QuestionsSummary = styled.div`
  border-radius: 10px;
  background: rgba(52, 60, 88, 0.08);
  width: 199px;
  margin: 15px;
  margin-top: 50px;
  padding: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 375px) {
    left: calc(50% - 199px / 2 + 1px);
  }
`;

export const CorrectSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  large {
    color: #343c58;
    font-size: 28px;
    line-height: 36px;
  }

  small {
    color: #343c58;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const WrongSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  large {
    color: #343c58;
    font-size: 28px;
    line-height: 36px;
  }

  small {
    color: #343c58;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const QuestionsDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 15px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const QuestionDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (max-width: 375px) {
    &:not(:last-child) {
      margin-bottom: 46px;
    }
  }

  &:not(:first-child) {
    border-left: 1px solid #b8bed5;

    @media (max-width: 375px) {
      border-left: 0;
    }
  }

  span {
    color: #343c58;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.44px;
  }
`;

export const DifficultyDetails = styled.div`
  color: #343c58;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
  letter-spacing: 0.4px;
`;
