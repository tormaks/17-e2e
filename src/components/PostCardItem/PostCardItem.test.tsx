import React from 'react';
import {render, screen} from '@testing-library/react';

import PostCardItem from './index';

describe('PostCardItem snapshot', () => {
  it ('PostCardItem snapshot didnt change', () => {
    const app = render(<PostCardItem id={1} name='Captain' path='dasdas' extension='dasdasd'/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The PostCardItem component', () => {
  it('should text is printed correctly', () => {
    render(<PostCardItem id={1} name='Captain' path='dasdas' extension='dasdasd'/>)

    expect(screen.getByText('Captain')).toBeInTheDocument();
  })

  it('should there is an img tag', () => {
    render(<PostCardItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})
