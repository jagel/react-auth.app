import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../authentication/authentication.context";

export const ROUTE_LOCATION = { 
    navegation : 'nav',
    hidden:'hidden'
}

function PrivateRoute({ component: Component, ...rest }){
    const isAuthenticated = useAuth();
    
    const renderComponent = (props) => {
        return (
            isAuthenticated ? 
            (<Component {...props} />) :
            (<Redirect to="login/" />)
        );
    }
    return (
    <Route 
        {...rest}
        render={renderComponent}
    />);
}

export default PrivateRoute;