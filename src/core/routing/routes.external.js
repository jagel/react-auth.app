import React from "react"
import { Route } from 'react-router-dom';
import CreateAccount from "../../account/createAccount/create.account";
import ForgotPassword from "../../account/forgotPassword/forgot.password";
import LoginPage from "../../account/logingPage/loginPage";
import { Home } from '../../external/landing/homepage';
import { ROUTE_LOCATION } from "./privateRoutes";


export function getExternalNavegation(){

    const addRoute =(name, location, path, component, isExact = false) => {
        return({
            name:name, location : location, path:path, 
            itemroute: isExact ?
                (<Route key={path} exact path={path} component={component} />) :
                (<Route key={path} path={path} component={component} />)
        });
    }

    let items = [];

    items.push(addRoute('Home',ROUTE_LOCATION.navegation, '/',Home, true));
    items.push(addRoute('Login',ROUTE_LOCATION.navegation, '/login',LoginPage));
    items.push(addRoute('Forgot password',ROUTE_LOCATION.hidden, '/forgot-password', ForgotPassword));
    items.push(addRoute('Create Account',ROUTE_LOCATION.hidden, '/create-account',CreateAccount));


    return items;
}