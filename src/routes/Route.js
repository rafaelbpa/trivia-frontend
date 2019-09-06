import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '~/store';

export default function RouteWrapper({ component: Component, ...rest }) {
  const { questionNumber, category } = store.getState().trivia;
  const isTriviaCompleted = questionNumber > 10;

  if (isTriviaCompleted) {
    return <Redirect to={`/result/${category}`} />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isTriviaCompleted: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isTriviaCompleted: false,
};
