import React, {useEffect, useState} from "react";
import RegistrationForm from "./Users/RegistrationForm";
import {useDispatch, useSelector} from "react-redux";
import {signUpThunkCreator} from "../redux/auth-reducer";
import { Redirect } from "react-router"


const Registration = () => {
    const [userData, setUserData] = useState({email:"", password:""})
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()
    let isAuth = useSelector(state =>state.auth.isAuth)

    useEffect(()=>{
        if(isAuth) {
            setRedirect(true)
        }
    }, [isAuth])

    const getUserData = (values) => {
        setUserData(()=>{
            return {
                ...userData,
                email: values.email,
                password: values.password
            }
        })
    }

    if(userData.email && userData.password) {
        dispatch(signUpThunkCreator(userData))

    }
    return <div style={{padding:"80px"}}>
        {redirect && <Redirect to={'/userpage'}/>}
        <RegistrationForm getUserData={getUserData}/>
    </div>
}

export default Registration