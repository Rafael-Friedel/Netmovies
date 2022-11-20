import Home from '@/pages/index';
import SingletonRouter from 'next/router';
import renderWithProvider from '../helpers/utils/renderWithProvider';

jest.mock('next/router', () => require('next-router-mock'));

describe('home / ', () => {
  it('test if the page redirects to movies', () => {
    renderWithProvider(<Home />);
    expect(SingletonRouter.asPath).toBe('/movies');
  });
});
