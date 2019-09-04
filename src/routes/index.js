import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Categories from '~/pages/Categories';
import Report from '~/pages/Report';
import Trivia from '~/pages/Trivia';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Categories} />
      <Route path="/trivia/:id" component={Trivia} />
      <Route path="/report" component={Report} />
    </Switch>
  );
}
