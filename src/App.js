import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const toggleCart = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
