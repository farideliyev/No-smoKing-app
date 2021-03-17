import React, {useState} from "react";
import firebase from "../../assets/fbConfig"

const Login = () => {
    let [id, setId] = useState(null)
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let uid = user.uid;
            setId(uid)
        }
    });



    return <div >
        You successfully logged in {id}
    </div>

}

export default Login;