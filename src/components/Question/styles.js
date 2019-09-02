import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: ${props =>
    props.isSelected ? '3px solid #0467DB' : '1px solid #c9cccf'};
  box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;

  span {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: #1e2124;
  }
`;
