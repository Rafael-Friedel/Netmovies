import 'bulma/css/bulma.min.css';
import MyProvider from '../context/myProvider';
import '../style/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;
