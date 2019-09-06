import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Categories from '~/pages/Categories';
import Result from '~/pages/Result';
import Trivia from '~/pages/Trivia';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Categories} />
      <Route path="/trivia/:id" component={Trivia} />
      <Route path="/result/:id" component={Result} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
