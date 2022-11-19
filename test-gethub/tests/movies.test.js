import Movies from '@/pages/movies/index';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import mockRouter from 'next-router-mock';
import goToPageDetails from '../helpers/utils/goToPageDetails';
import renderWithProvider from '../helpers/utils/renderWithProvider';
import configurationMock from '../mocks/configurationAPI';

describe('Movies', () => {
  beforeEach(() => {
    renderWithProvider(<Movies />);
  });

  afterEach(() => () => jest.fn().mockClear());

  it('1-renders a button of search', () => {
    const button = screen.getByRole('button', { text: 'Buscar filme' });

    expect(button).toBeInTheDocument();
  });

  it('2-renders a input of search', () => {
    const inputSearch = screen.getByTestId('input-search');

    expect(inputSearch).toBeInTheDocument();
  });

  it('3-checks whether it is possible to write to the input ', async () => {
    const inputSearch = screen.getByTestId('input-search');

    expect(inputSearch).toHaveValue('');
    await userEvent.type(inputSearch, 'homem aranha');

    expect(inputSearch).toHaveValue('homem aranha');
  });

  it('4-checks if the button starts disabled and with 2 digits enables', async () => {
    const inputSearch = screen.getByTestId('input-search');
    const button = screen.getByRole('button', { text: 'Buscar filme' });

    expect(button).toBeDisabled();
    await userEvent.type(inputSearch, 'h');

    expect(button).toBeDisabled();
    await userEvent.type(inputSearch, 'homem aranha');

    expect(button).toBeEnabled();
  });

  it('5-test if it is possible to search for movies', async () => {
    goToPageDetails(screen, userEvent);
    mockRouter.push({
      pathname: 'movies/[id]',
      query: { id: '21' },
    });
    expect(mockRouter).toMatchObject({
      asPath: 'movies/21',
      pathname: 'movies/[id]',
    });
  });
});
