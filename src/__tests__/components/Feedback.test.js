import React from 'react';
import { render } from '@testing-library/react';

import Feedback from '~/components/Feedback';

describe('Feedback component', () => {
  it('should have the text "Você errou!" if user answered the wrong question', () => {
    const { getByText } = render(
      <Feedback isCorrect={false} goForward={() => {}} />
    );

    expect(getByText('Você errou!'));
  });

  it('should have the text "Você acertou!" if user answered the correct question', () => {
    const { getByText } = render(<Feedback isCorrect goForward={() => {}} />);

    expect(getByText('Você acertou!'));
  });
});
