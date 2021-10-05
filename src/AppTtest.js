import { render, screen } from '@testing-library/react';
import App from './App';

// App.test.js

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Última Busqueda/i);
  expect(linkElement).toBeInTheDocument();
});
