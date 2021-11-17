import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextProvide } from './components/store/auth-context';

ReactDOM.render(
  <AuthContextProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvide>,
  document.getElementById('root')
);
