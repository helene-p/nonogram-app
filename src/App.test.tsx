import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App', async () => {
  beforeAll(() => {
    render(<App />);
  });

  it('should render the App', () => {
    expect(screen.getByRole('heading').outerText).toEqual('Nonogram');
  });

  it.skip('should increment the counter when the user clicks', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button').innerHTML).toEqual('count is 1');
  });
});
