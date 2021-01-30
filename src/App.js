import './App.css';
import { Link, BrowserRouter , Route, Switch } from 'react-router-dom';
import { Home } from './external/homepage';
import { AuthContext } from './core/authentication/authentication.context';
import PrivateRoute, { ROUTE_LOCATION } from './core/routing/privateRoutes';

import { getInternalNavegation } from './core/routing/routes.internal';
import { getExternalNavegation } from './core/routing/routes.external';

function App() {
  const isAuthenticated = false;
  
  let routes = isAuthenticated ? getInternalNavegation() : getExternalNavegation();
  const navegationRoutes = routes.filter( x=> x.location == ROUTE_LOCATION.navegation);
  
  const routeItems = [];

  for (const route of routes) {
    routeItems.push(<li to={route.path}>{route.name}</li>);
  }
  return (
    <AuthContext.Provider value={isAuthenticated}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li key={routes.length}>
                <Link to="/">Home</Link>
              </li>
              { navegationRoutes.map((route,index)=><li key={index}><Link to={route.path}>{route.name}</Link></li>) }
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            { isAuthenticated ? 
              routes.map((route,index)=><PrivateRoute key={index} path={route.path} component={route.component} />) :
              routes.map((route,index)=><Route key={index} path={route.path} component={route.component} />)
            }
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;