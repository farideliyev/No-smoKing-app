import React from "react";
import { Button } from 'antd';
import "./Header.css"
import logo from "../img/logo.svg";
import {useSelector} from "react-redux";
import firebase from "../assets/fbConfig";
import { useHistory } from "react-router";


const Header = ()=> {
    const isAuth = useSelector(state => state.auth.isAuth)
    const history = useHistory()

    const logOut = ()=>{
        debugger
        firebase.auth().signOut().then(() => {
            history.push("/")
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className="section-header">
            <div className="section-inner">
                <div className="section-header__logo">
                    <a href=""><img src={logo} alt="logo"/></a>

                </div>
                <div className="section-header__btn-group">
                    {isAuth
                        ? <div className="login">
                             <Button onClick={logOut} type="primary" size="lg">Logout</Button>
                        </div>
                        :<>
                        <div className="login">
                            <a href="/login"> <Button type="primary" size="lg">Login</Button></a>
                        </div>
                        <div className="register">
                        <a href="/registration"><Button type="primary" size="lg">Registration</Button></a>
                        </div>
                        </>
                    }
                </div>
            </div>

        </div>
    )

}

export default Header