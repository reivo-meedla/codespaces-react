import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all expenses', () => {
  render(<App />);
  expect(screen.getByText('New book')).toBeDefined();
  expect(screen.getByText('Doohickey')).toBeDefined();
});

test('renders the new expense form inputs', () => {
  render(<App />);
  expect(screen.getByLabelText('Title')).toBeDefined();
  expect(screen.getByLabelText('Price')).toBeDefined();
  expect(screen.getByLabelText('Date')).toBeDefined();
});
