export default async function goToPageDetails(screen, userEvent) {
  const inputSearch = screen.getByTestId('input-search');
  const button = screen.getByRole('button', { text: 'Buscar filme' });
  await userEvent.type(inputSearch, 'homem aranha');
  await userEvent.click(button);
  const movies = screen.getAllByTestId('movie-card');
  await userEvent.click(movies[0]);
}
