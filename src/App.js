import { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './screens/Welcome';
import Products from './screens/Products';
import ProductDetail from './screens/ProductDetail';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Navigate  to='/welcome' />} />
            <Route path='/welcome/*' element={<Welcome />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductDetail />} />
          </Routes>
        </main>
      </Fragment>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
