import { Link, BrowserRouter , Route, Switch } from 'react-router-dom';
import { AuthContext } from './core/authentication/authentication.context';
import { getInternalNavegation } from './core/routing/routes.internal';
import { getExternalNavegation } from './core/routing/routes.external';

import './App.css';
import PrivateRoute, { ROUTE_LOCATION } from './core/routing/privateRoutes';

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
              { navegationRoutes.map((route,index)=><li key={index}><Link to={route.path}>{route.name}</Link></li>) }
            </ul>
          </nav>

          <Switch>
            { isAuthenticated ? 
              routes.map((route,index)=><PrivateRoute key={index} path={route.path} component={route.component} />) :
              routes.map((item,index)=> item.itemroute)
            }
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;