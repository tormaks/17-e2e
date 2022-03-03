import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import Search from './index';

describe('Search snapshot', () => {
  it ('Search snapshot didnt change', () => {
    const app = render(<Search search={''} handleSearch={() => {}}/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The search component', () => {
  it('should onChange calls currently work', async () => {
    const onChange = jest.fn();

    render(<Search search='' handleSearch={onChange}/>);

    await userEvent.type(screen.getByRole('textbox'), 'Captain');

    expect(onChange).toHaveBeenCalledTimes(7);
  })

  it('should the enter value in the document', async () => {
    const onChange = jest.fn();

    render(<Search search='Captain' handleSearch={onChange}/>);

    expect(screen.getByDisplayValue('Captain')).toBeInTheDocument();
  })

  it('should the placeholder value in the document', async () => {
    const onChange = jest.fn();

    render(<Search search='' handleSearch={onChange}/>);

    expect(screen.getByPlaceholderText('Enter the name of char')).toBeInTheDocument();
  })
})
