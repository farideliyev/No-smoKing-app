import React from "react";
import  "./assets/fbConfig";
import "./App.css"
import Header from "./components/Header";
import {BrowserRouter, Route}from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import UserPageContainer from "./components/Users/UserPageContainer";

const App = () => {

    return <>
        <Header/>
        <BrowserRouter>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route  path="/userpage/:userId?" render={()=><UserPageContainer/>}/>
        </BrowserRouter>

        </>
}

export default App;