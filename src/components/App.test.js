import { render } from '@testing-library/react';
import App from './App';

test('renders Term Deposit Calculator title', () => {
  const { getByText } = render(<App />);
  const calculatorTitle = getByText(/Term Deposit Calculator/i);
  expect(calculatorTitle).toBeInTheDocument();
});
