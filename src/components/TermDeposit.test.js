import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TermDeposit from './TermDeposit';

test('renders component title', () => {
  const { getByText } = render(<TermDeposit />);
  const depositInput = getByText(/Calculate your Term Deposit/i);
  expect(depositInput).toBeInTheDocument();
});

test('renders deposit amount input', () => {
  const { getByRole } = render(<TermDeposit />);
  const depositInput = getByRole('textbox', {name: /Deposit Amount/i});
  expect(depositInput).toBeInTheDocument();
});

test('renders interest rate input', () => {
  const { getByRole } = render(<TermDeposit />);
  const interestRateInput = getByRole('spinbutton', {name: /Interest Rate/i});
  expect(interestRateInput).toBeInTheDocument();
});

test('renders investment term input', () => {
  const { getByRole } = render(<TermDeposit />);
  const investmentTermInput = getByRole('textbox', {name: /Investment Term \(months\)/i});
  expect(investmentTermInput).toBeInTheDocument();
});

test('renders interest paid dropdown with correct values', () => {
  const { getByRole, getByText } = render(<TermDeposit />);
  const interestPaidDropdown = getByRole('combobox', { name: /Interest Paid/i });
  expect(interestPaidDropdown).toBeInTheDocument();
  fireEvent.click(interestPaidDropdown);
  expect(getByText(/Monthly/i)).toBeInTheDocument();
  expect(getByText(/Quarterly/i)).toBeInTheDocument();
  expect(getByText(/Annually/i)).toBeInTheDocument();
  expect(getByText(/At Maturity/i)).toBeInTheDocument();
});

test('limits deposit amounts to only a number', () => {
  const { getByRole } = render(<TermDeposit />);
  const depositInput = getByRole('textbox', {name: /Deposit Amount/i});
  fireEvent.change(depositInput, { target: { value: '10500' } });
  expect(depositInput.value).toBe('10500');
  fireEvent.change(depositInput, { target: { value: '1.05' } });
  expect(depositInput.value).not.toBe('1.05');
  fireEvent.change(depositInput, { target: { value: 'abc' } });
  expect(depositInput.value).not.toBe('abc');
});

test('limits interest rate to between 0 and 100', () => {
  const { getByRole } = render(<TermDeposit />);
  const interestInput = getByRole('spinbutton', {name: /Interest Rate/i});
  fireEvent.change(interestInput, { target: { value: '105' } });
  expect(interestInput.value).not.toBe('105');
  fireEvent.change(interestInput, { target: { value: '1.05' } });
  expect(interestInput.value).toBe('1.05');
});

test('limits investment term to between 0 and 60', () => {
  const { getByRole } = render(<TermDeposit />);
  const investmentTermInput = getByRole('textbox', {name: /Investment Term \(months\)/i});
  fireEvent.change(investmentTermInput, { target: { value: '65' } });
  expect(investmentTermInput.value).not.toBe('65');
  fireEvent.change(investmentTermInput, { target: { value: '36' } });
  expect(investmentTermInput.value).toBe('36');
});

test('renders term deposit total balance when all fields are filled', () => {
  const { getByRole, getByText } = render(<TermDeposit />);

  const depositInput = getByRole('textbox', {name: /Deposit Amount/i});
  fireEvent.change(depositInput, { target: { value: '10000' } });
  const interestInput = getByRole('spinbutton', {name: /Interest Rate/i});
  fireEvent.change(interestInput, { target: { value: '1.10' } });
  const investmentTermInput = getByRole('textbox', {name: /Investment Term \(months\)/i});
  fireEvent.change(investmentTermInput, { target: { value: '36' } });
  const interestPaidDropdown = getByRole('combobox', { name: /Interest Paid/i });
  fireEvent.change(interestPaidDropdown, { target: { value: 'At Maturity' } });
  expect(getByText(/Term Deposit Total Balance/i)).toBeInTheDocument();
  expect(getByText(/10330/i)).toBeInTheDocument();
});

