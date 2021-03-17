import React from "react"
import { Button } from 'antd';
import "./Header.css"
import logo from "../img/logo.svg"


const Header = ()=> {
    return (
        <div className="section-header">
            <div className="section-inner">
                <div className="section-header__logo">
                    <a href=""><img src={logo} alt="logo"/></a>

                </div>
                <div className="section-header__btn-group">
                    <div className="login">
                        <a href="/login"> <Button type="primary" size="lg">Login</Button></a>

                    </div>
                    <div className="register">
                        <a href="/registration"><Button type="primary" size="lg">Registration</Button></a>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Header