import {authAPI} from "../firebase/api";
import firebase, {db} from "../assets/fbConfig";


let initialState = {
    uid: null,
    name: null,
    surname: null,
    age: null,
    sex: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SIGNED_UP":

            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
             default:
                return state
    }
}

export const signUpActionCreator = (payload) => ({type:"USER_SIGNED_UP", payload:payload})

export const signUpThunkCreator = (data)=> {
    return async (dispatch)=> {
        let response = await authAPI.register(data)
        if(response.toString() === "signIn") {
           dispatch(signUpActionCreator(data))
        }
    }
}

export const authMeThunkCreator = ()=> {
    return  (dispatch)=>{
        firebase.auth().onAuthStateChanged( async (user) =>  {
            if (user) {
                let uid =  user.uid;
                let userData = await db.collection("users").doc(uid).get().then(doc => doc.data())
                userData.uid = uid
                dispatch(signUpActionCreator(userData))
            } else {
                console.log("no user beach")
            }
        })
    }
}

export default authReducer