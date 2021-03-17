import React from "react";
import  "./assets/fbConfig";
// import  "./assets/fbUiConfig";
import "./App.css"
import Header from "./components/Header";
import {BrowserRouter}from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Login from "./components/Login";
import Registration from "./components/Registration";
import UserPage from "./components/Users/UserPage";

const App = () => {

    return <>
        <Header/>
        <BrowserRouter>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/userpage" component={UserPage}/>
        </BrowserRouter>

        </>
}

export default App;