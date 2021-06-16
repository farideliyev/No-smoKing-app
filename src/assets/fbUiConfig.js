import firebase from "./fbConfig";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


let ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
 /*   callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            let user = authResult.user;
            let credential = authResult.credential;
            let operationType = authResult.operationType;

            if(!user) {
                console.log("no access")
                return false;
            } else {
                return true
            }
        }
    },*/
    signInSuccessUrl: '/userpage',
    signInOptions: [{
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: [firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD]
    }],
    // Other config options...
})

