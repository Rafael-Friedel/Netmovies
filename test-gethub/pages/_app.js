import 'bulma/css/bulma.min.css';
import MyProvider from '../context/myProvider';

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;
