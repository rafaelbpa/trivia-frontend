import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;

  span {
    font-size: 24px;
    line-height: 32px;
    color: #1e2124;
    margin: 10px 0;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background: none;
    border: 0;

    span {
      margin-left: 8px;
      font-size: 14px;
      line-height: 20px;
      color: #53595f;
      text-align: right;
      letter-spacing: 0.4;
      font-weight: bold;
    }
  }
`;
