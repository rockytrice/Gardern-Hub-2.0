import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Login from "./pages/SignIn/LoginPage";
import SignUpPage from "./pages/SignUp/SignUp";
import DashBoard from "./pages/DashboardPage/Dashboard";
import InfoPage from "./pages/AboutPage/About";

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route  path= "/Login" component = {Login} />
        <Route path="/DashBoard" component= {DashBoard} />
        <Route path="/About" component= {InfoPage} /> 
        </Switch>
    </BrowserRouter>
)

export default Router;