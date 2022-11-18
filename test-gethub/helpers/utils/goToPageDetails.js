export default function goToPageDetails(screen, userEvent) {
  const inputSearch = screen.getByTestId('input-search');
  const button = screen.getByRole('button', { text: 'Buscar filme' });
  userEvent.type(inputSearch, 'homem aranha');
  userEvent.click(button);
  const movies = screen.getAllByTestId('movie-card');
  userEvent.click(movies[0]);
}
