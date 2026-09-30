import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
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

test('filters expenses by the selected year', () => {
  render(<App />);
  const yearFilter = screen.getByRole('combobox');

  expect(screen.getByText('Doohickey')).toBeDefined();
  expect(screen.queryByText('New book')).toBeNull();

  fireEvent.change(yearFilter, { target: { value: '2024' } });

  expect(screen.getByText('New book')).toBeDefined();
  expect(screen.queryByText('Doohickey')).toBeNull();
  expect(screen.queryByText('Gadget')).toBeNull();

  fireEvent.change(yearFilter, { target: { value: '2023' } });

  expect(screen.getByText('Doohickey')).toBeDefined();
  expect(screen.queryByText('New book')).toBeNull();
  expect(screen.queryByText('Gadget')).toBeNull();
});
