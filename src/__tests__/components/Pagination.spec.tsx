/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent, getByText, act } from '@testing-library/react';

import Component from 'components/Pagination';

describe('Pagination component', () => {
  const initialState = {
    page: 0,
    pages: 0,
    onChange: () => {},
  };

  it('should render without data', () => {
    const result = render(<Component {...initialState} />);
    expect(result).toMatchSnapshot();
  });

  it('should render with data', () => {
    const result = render(<Component {...initialState} pages={5} />);
    expect(result).toMatchSnapshot();
  });

  it('should render with data and change page', () => {
    const changePageMock = jest.fn();

    const result: any = render(
      <Component {...initialState} pages={5} onChange={changePageMock} />,
    );
    const { container } = result;

    act(() => {
      fireEvent(
        getByText(container, 'Próximo'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );

      fireEvent(
        getByText(container, '1'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );

      fireEvent(
        getByText(container, 'Anterior'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
    });

    expect(changePageMock).toHaveBeenCalledWith(0);
    expect(changePageMock).toHaveBeenCalledWith(1);
    expect(result).toMatchSnapshot();
  });
});
