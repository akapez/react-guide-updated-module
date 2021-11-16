import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './screens/AllQuotes';
import QuoteDetails from './screens/QuoteDetails';
import NewQuote from './screens/NewQuote';
import NotFound from './screens/NotFound';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetails />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
