import React, {useEffect, useState} from "react";
import {BrowserRouter, NavLink, Route, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { authMeThunkCreator} from "../../redux/auth-reducer";
import "./UserPageContainer.css"
import {Redirect, useHistory, Switch} from "react-router-dom"
import Login from "../Login";
import Registration from "../Registration";
import UserPageInfo from "./UserPageInfo";

const UserPageContainer = (props) => {
    let dispatch = useDispatch()
    let userInfo = useSelector(state=>state.auth)
    let auth = useSelector(state=>state.auth.isAuth)
    let uid = useSelector(state => state.auth.uid)

    useEffect(()=>{
        dispatch(authMeThunkCreator())
    }, [])


    return <>
        {auth ?
            <div className="userPage">
                <div className="userPage__links">
                    <NavLink to={`/userpage/${uid}`}>INFO</NavLink>
                </div>
                <div className="userPage__routes">

                        <Route exact path={`/userpage/${uid}`} render={() => <UserPageInfo userInfo={userInfo}/>}/>

                </div>
            </div>
            : <p>Wait please</p>
        }
    </>




}
export default UserPageContainer;