import React from 'react';
import { render } from '@testing-library/react';

import Component from 'components/Theme';

describe('Theme component', () => {
  it('should render', () => {
    const result = render(<Component>Theme</Component>);
    expect(result).toMatchSnapshot();
  });
});
