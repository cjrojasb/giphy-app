import { render, screen } from '@testing-library/react';
import App from '../App';

test('home work as expected', () => {
  const { container } = render(<App  />)
  const gifLink = container.querySelector('.media')
  expect(gifLink).toBeVisible()
});
 