import React from 'react';
import { render, screen } from '@testing-library/react';

import GraphView from '../GraphView';

const testId = 'testingGraphView';

type GraphViewProps = React.ComponentProps<typeof GraphView>;

const renderComponent = (props: GraphViewProps = {}) => render(
  <GraphView
    data-testid={testId}
    {...props}
  />,
);

describe('GraphView snapshot', () => {
  it ('GraphView snapshot didnt change', () => {
    const app = render(<GraphView/>)

    expect(app).toMatchSnapshot();
  });
});

describe('Компонент GraphView', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('should be text in div', () => {
    render(<GraphView/>);

    expect(screen.getByText('In progress...')).toBeInTheDocument();
  })
});
