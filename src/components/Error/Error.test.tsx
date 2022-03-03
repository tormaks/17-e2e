import React from 'react';
import {render, screen} from '@testing-library/react';

import Error from './index';

describe('Error snapshot', () => {
  it ('Error snapshot didnt change', () => {
    const app = render(<Error/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The Error component', () => {
  it('should be render', () => {
    render(<Error/>);
  })

  it('', () => {
    render(<Error/>);

    expect(screen.getByText('Error')).toBeInTheDocument();
  })
})
