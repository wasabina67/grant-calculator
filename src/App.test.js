import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const runTest = ({ limit, rate, expectedResult, index }) => {
  test(`Test case ${index + 1}`, () => {
    render(<App />);

    const grantLimitInput = screen.getByPlaceholderText('200');
    fireEvent.change(grantLimitInput, { target: { value: limit } });

    const grantRateInput = screen.getByPlaceholderText('0.75');
    fireEvent.change(grantRateInput, { target: { value: rate } });

    const calcButton = screen.getByText('計算');
    fireEvent.click(calcButton);

    const result = screen.getByText(expectedResult);
    if (expectedResult !== null) {
      expect(result).toBeInTheDocument();
    } else {
      expect(result).toBeNull();
    }
  });
};

const testCases = [
  { limit: '100', rate: '0.75', expectedResult: '133.33' },
  { limit: '200', rate: '0.75', expectedResult: '266.67' },
  { limit: '300', rate: '0.75', expectedResult: '400.00' },
  { limit: '400', rate: '0.75', expectedResult: '533.33' },
  { limit: '500', rate: '0.75', expectedResult: '666.67' },
];

testCases.forEach(({ limit, rate, expectedResult }, index) => {
  runTest({ limit: limit, rate: rate, expectedResult: expectedResult, index: index });
});
