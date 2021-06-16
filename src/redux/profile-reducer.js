import {authAPI} from "../firebase/api";
import firebase, {db} from "../assets/fbConfig";
import {signUpActionCreator} from "./auth-reducer";


let initialState = {
        uid: null,
        name: null,
        surname: null,
        age: null,
        sex: null,
        experience: null
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
      case "SET_PROFILE":
          return {
                  ...state,
                  ...action.payload
          }
  }
}

let setProfileAction = (profileData)=>({type: "SET_PROFILE", payload:profileData})

export let setProfileThunkCreator =  (uid, fieldName)=>{
    return (dispatch) => {
       return db.collection("users").doc(uid).update({
           age: 24
       }).then((doc) => {
            console.log("Document successfully updated!");
            console.log(doc.data())
        })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        // dispatch(setProfileAction(userData))
    }
}

export default profileReducer