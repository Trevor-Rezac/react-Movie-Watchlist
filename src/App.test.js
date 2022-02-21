import { render, screen } from '@testing-library/react';
import SearchPage from './SearchPage';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders a header on searchPage', async () => {
  const location = { pathname: '/search-page' };
  render(<Router history={location}>
    <SearchPage /> 
  </Router>);
  const linkElement = await screen.findByText(/Add movies to your Watchlist!/i);
  expect(linkElement).toBeInTheDocument();
});
