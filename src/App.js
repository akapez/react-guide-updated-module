import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './screens/Welcome';
import Products from './screens/Products';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/products' exact>
          <Products />
        </Route>
        <Route path='/products/:productId'>
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
