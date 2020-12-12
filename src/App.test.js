import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(
    /Select all correct answers and click Submit Answer/i,
  );
  expect(heading).toBeInTheDocument();
});
test('only renders feedback after hitting submit', () => {
  render(<App />);

  const feedback1 = screen.queryAllByText(/Wrong/i);
  const feedback2 = screen.queryAllByText(/Correct/i);
  expect(feedback1).not.toBeNull();
  expect(feedback2).not.toBeNull();
});
