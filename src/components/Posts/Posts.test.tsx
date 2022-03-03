import React from 'react';
import {render, screen} from '@testing-library/react';

import Posts from './index';

describe('Posts snapshot', () => {
  it ('Posts snapshot didnt change', () => {
    const app = render(<Posts errorLoading = {false} loading = {true} posts = {[]} active = {true} search = ''/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The Posts component', () => {
  it('should be list in the document', () => {
    render(<Posts errorLoading={false} loading={false} posts={[]} active={true} search={''}/>)

    expect(screen.getByRole('list')).toBeInTheDocument();
  })

  it('should be button in the document', () => {
    render(<Posts errorLoading={false} loading={false} posts={[]} active={true} search={''}/>)

    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('should button style have display: block', () => {
    render(<Posts errorLoading={false} loading={false} posts={[]} active={true} search={''}/>)

    expect(screen.getByRole('button')).toHaveStyle('display: block');
  })

  it('should ul style have display: grid', () => {
    render(<Posts errorLoading={false} loading={false} posts={[]} active={true} search={''}/>)

    expect(screen.getByRole('list')).toHaveStyle('display: grid');
  })

  it('should be button not hidden in the document', () => {
    render(<Posts errorLoading={false} loading={false} posts={[]} active={true} search={''}/>)

    expect(screen.getByRole('button', {hidden: false})).toBeInTheDocument();
  })

  it('should be Error component in the document', () => {
    render(<Posts errorLoading={true} loading={false} posts={[]} active={true} search={''}/>)

    expect(screen.getByText('Error')).toBeInTheDocument();
  })
})
