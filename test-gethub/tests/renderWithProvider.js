import { render } from '@testing-library/react';
import MyProvider from '../context/myProvider';

const renderWithProvider = (component) => {
  return render(<MyProvider>{component}</MyProvider>);
};

export default renderWithProvider;
