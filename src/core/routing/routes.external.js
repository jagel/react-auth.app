import React from "react"
import CreateAccount from "../../account/createAccount/create.account";
import ForgotPassword from "../../account/forgotPassword/forgot.password";
import LoginPage from "../../account/logingPage/loginPage";
import { ROUTE_LOCATION } from "./privateRoutes";


export function getExternalNavegation(){
    return [
        { name:'Login', location : ROUTE_LOCATION.navegation, path:'/login', component: LoginPage },
        { name:'Forgot password', location : ROUTE_LOCATION.hidden , path:'/forgot-password', component: ForgotPassword },
        { name:'Create Account', location : ROUTE_LOCATION.hidden , path:'/create-account', component: CreateAccount }
    ]
}