// Import the functions you need from the SDKs you need
// import firebase from "firebase";

// import {storage} from "firebase/"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase/compat/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyC1HSUeG92u4GatMdyoSDIWSkUvMIjBCKk",
//   authDomain: "hotstar-clone-app-05.firebaseapp.com",
//   projectId: "hotstar-clone-app-05",
//   storageBucket: "hotstar-clone-app-05.appspot.com",
//   messagingSenderId: "925298016370",
//   appId: "1:925298016370:web:6943e8fe8b00b6e94182eb",
//   measurementId: "G-LF2SSVYHC7"
// };
// const firebaseApp=initializeApp(firebaseConfig)
// const db=firebaseApp.firestore();
// // const auth=auth();
// const provider= new auth.GoogleAuthProvider();
// const storage =firebase.storage();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export {provider}
// export default db ;

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC1HSUeG92u4GatMdyoSDIWSkUvMIjBCKk",
    authDomain: "hotstar-clone-app-05.firebaseapp.com",
    projectId: "hotstar-clone-app-05",
    storageBucket: "hotstar-clone-app-05.appspot.com",
    messagingSenderId: "925298016370",
    appId: "1:925298016370:web:6943e8fe8b00b6e94182eb",
    measurementId: "G-LF2SSVYHC7"
  };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const  provider = new firebase.auth.GoogleAuthProvider();

export { auth ,provider};
export default db;