import React from 'react';
import { render } from '@testing-library/react';

import Component from 'components/ErrorMessage';

describe('ErrorMessage component', () => {
  it('should render', () => {
    const result = render(<Component>ErrorMessage</Component>);
    expect(result).toMatchSnapshot();
  });
});
