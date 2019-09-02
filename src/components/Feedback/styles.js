import styled from 'styled-components';

import tick from '~/assets/tick.png';
import cross from '~/assets/cross.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 328px;
  border: 3px solid;
  border-color: ${props => (props.isCorrect ? '#32CB82' : '#FF4F4F')};
  box-shadow: 0px 3px 6px rgba(52, 60, 88, 0.4);
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img.attrs(props => ({
  src: props.isCorrect ? tick : cross,
}))`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  color: #343c58;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-top: 14px;
  margin-bottom: 31px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  background: #0467db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 11px;
  padding-bottom: 11px;

  span {
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    margin-right: 8px;
  }
`;
