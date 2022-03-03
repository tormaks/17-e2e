import React from 'react';
import {render, screen} from '@testing-library/react';

import Loading from './index';

describe('Loading snapshot', () => {
  it ('AppHeader snapshot didnt change', () => {
    const app = render(<Loading/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The Loading component', () => {
  it('should be render', () => {
    render(<Loading/>);
  })
})
