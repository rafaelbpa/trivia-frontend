import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Categories from '~/pages/Categories';
import Report from '~/pages/Report';
import Trivia from '~/pages/Trivia';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Categories} />
      <Route path="/trivia" component={Trivia} />
      <Route path="/report" component={Report} />
    </Switch>
  );
}
