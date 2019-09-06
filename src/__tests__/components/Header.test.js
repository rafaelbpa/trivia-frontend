import React from 'react';
import { render } from '@testing-library/react';

import Header from '~/components/Header';

describe('Header component', () => {
  it('should have a title "Teste Dev Frontend"', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Teste Dev Frontend'));
  });
});
