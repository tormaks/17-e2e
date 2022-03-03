import React from 'react';
import {render, screen} from '@testing-library/react';

import PostListItem from './index';

describe('PostListItem snapshot', () => {
  it ('PostListItem snapshot didnt change', () => {
    const app = render(<PostListItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The PostListItem component', () => {
  it('should text is printed correctly', () => {
    render(<PostListItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(screen.getByText('Captain')).toBeInTheDocument();
  })

  it('should there is an img tag', () => {
    render(<PostListItem id={1} name='Captain' path='test' extension='.jpg'/>)

    expect(screen.getByRole('img')).toBeInTheDocument();
  })
})
