import firebase, {db} from "../assets/fbConfig"


export const authAPI = {
    register(data){
        //Register user
       return  firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // GET new created user's id
                let userId = userCredential.user.uid
                // Create new document with user's id
                let docRef = db.collection("users").doc(String(userId));
                //GIVE him test name
                docRef.set({
                    name: "KOPEK PEK PEK"
                }).then(() => {
                    console.log("Document successfully written!");
                })

                return userCredential.operationType


            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorMessage)
            });
    }
}


export const profileAPI = {
    setProfile(data) {

    }

}