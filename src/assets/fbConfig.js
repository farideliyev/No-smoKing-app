import firebase from "firebase/app"
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDmJ4w082yRAe23-HW5uWy-TB_mQvjqJ_0",
    authDomain: "no-smoking-dda62.firebaseapp.com",
    projectId: "no-smoking-dda62",
    storageBucket: "no-smoking-dda62.appspot.com",
    messagingSenderId: "64650166086",
    appId: "1:64650166086:web:19bcec69fdba04ea39af47",
    measurementId: "G-QCPB0XX7LB"
};

firebase.initializeApp(firebaseConfig)

export default firebase