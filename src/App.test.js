import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('first', () => {
  render(<App />);

  const grantLimitInput = screen.getByPlaceholderText('200');
  fireEvent.change(grantLimitInput, { target: { value: '200' } });

  const grantRateInput = screen.getByPlaceholderText('0.75');
  fireEvent.change(grantRateInput, { target: { value: '0.75' } });

  const calcButton = screen.getByText('計算');
  fireEvent.click(calcButton);

  const result = screen.getByText('266.67');
  expect(result).toBeInTheDocument();
});
