import './App.css';
import { Link, BrowserRouter , Route, Switch } from 'react-router-dom';
import { Products } from './catalogs/products';
import { Home } from './external/homepage';
import Login from './account/login';

function App() {
  return (
    <BrowserRouter>
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
