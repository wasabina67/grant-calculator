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

    if (expectedResult !== null) {
      const result = screen.getByText(expectedResult);
      expect(result).toBeInTheDocument();
    }
  });
};

const testCases = [
  { limit: '100', rate: '0.75', expectedResult: '133.33' },
  { limit: '200', rate: '0.75', expectedResult: '266.67' },
  { limit: '300', rate: '0.75', expectedResult: '400.00' },
  { limit: '400', rate: '0.75', expectedResult: '533.33' },
  { limit: '500', rate: '0.75', expectedResult: '666.67' },
  { limit: '600', rate: '0.75', expectedResult: '800.00' },
  { limit: '700', rate: '0.75', expectedResult: '933.33' },
  { limit: '800', rate: '0.75', expectedResult: '1066.67' },
  { limit: '900', rate: '0.75', expectedResult: '1200.00' },
  { limit: '1', rate: '0.01', expectedResult: '100.00' },
  { limit: '1', rate: '1', expectedResult: '1.00' },
  { limit: '9999', rate: '0.01', expectedResult: '999900.00' },
  { limit: '9999', rate: '1', expectedResult: '9999.00' },
];

testCases.forEach(({ limit, rate, expectedResult }, index) => {
  runTest({ limit: limit, rate: rate, expectedResult: expectedResult, index: index });
});
