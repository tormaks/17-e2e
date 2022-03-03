import React from 'react';
import { render, screen } from '@testing-library/react';

import AppHeader from '../AppHeader';

const testId = 'testingAppHeader';

type AppHeaderProps = React.ComponentProps<typeof AppHeader>;

const renderComponent = (props: AppHeaderProps = {}) => render(
  <AppHeader
    data-testid={testId}
    {...props}
  />,
);

describe('AppHeader snapshot', () => {
  it ('AppHeader snapshot didnt change', () => {
    const app = render(<AppHeader/>)

    expect(app).toMatchSnapshot();
  });
});

describe('The AppHeader component', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('should be header tag', () => {
    render(<AppHeader/>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  })

  it('should be text in h1', () => {
    render(<AppHeader/>);

    expect(screen.getByText('Найди своего любимого персонажа из вселенной MARVEL')).toBeInTheDocument();
  })
});

