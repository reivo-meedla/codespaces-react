import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders expenses for the selected year', () => {
  render(<App />);
  expect(screen.getByText('Doohickey')).toBeDefined();
  expect(screen.queryByText('New book')).toBeNull();
  expect(screen.queryByText('Gadget')).toBeNull();
});

test('renders the new expense form inputs', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Add New Expense' }));
  expect(screen.getByLabelText('Title')).toBeDefined();
  expect(screen.getByLabelText('Amount')).toBeDefined();
  expect(screen.getByLabelText('Date')).toBeDefined();
});

test('closes the new expense form when canceled', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Add New Expense' }));

  expect(screen.getByLabelText('Title')).toBeDefined();
  fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

  expect(screen.queryByLabelText('Title')).toBeNull();
  expect(screen.getByRole('button', { name: 'Add New Expense' })).toBeDefined();
});

test('closes the new expense form after adding an expense', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Add New Expense' }));
  fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New item' } });
  fireEvent.change(screen.getByLabelText('Amount'), { target: { value: '12.50' } });
  fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-06-01' } });
  fireEvent.click(screen.getByRole('button', { name: 'Add Expense' }));

  expect(screen.queryByLabelText('Title')).toBeNull();
  expect(screen.getByRole('button', { name: 'Add New Expense' })).toBeDefined();
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
