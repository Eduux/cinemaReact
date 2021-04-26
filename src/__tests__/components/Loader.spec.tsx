import React from 'react';
import { render } from '@testing-library/react';

import Component from 'components/Loader';

describe('Loader component', () => {
  it('should render', () => {
    const result = render(<Component />);
    expect(result).toMatchSnapshot();
  });
});
