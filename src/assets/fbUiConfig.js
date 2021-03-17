import firebase from "./fbConfig";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


let ui = new firebaseui.auth.AuthUI(firebase.auth());

export let authUi = ui.start('#firebaseui-auth-container', {
    signInSuccessUrl: '/userpage',
    signInOptions: [{
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: [firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD]
    }],
    // Other config options...
})

