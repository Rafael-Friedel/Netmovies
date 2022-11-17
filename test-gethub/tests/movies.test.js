import Movies from '@/pages/movies/index';
import { screen } from '@testing-library/react';
import renderWithProvider from './renderWithProvider';

describe('Movies', () => {
  beforeEach(() => renderWithProvider(<Movies />));
  it('renders a button of search', () => {
    const button = screen.getByRole('button', { text: 'Buscar filme' });

    expect(button).toBeInTheDocument();
  });

  it('renders a input of search', () => {
    const inputSearch = screen.getByTestId('input-search');

    expect(inputSearch).toBeInTheDocument();
  });
});
