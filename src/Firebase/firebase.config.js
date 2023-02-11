import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB559qeeOOqT3nYWc3w1hAl-soolqnTKkU",
    authDomain: "lighteniam.firebaseapp.com",
    projectId: "lighteniam",
    storageBucket: "lighteniam.appspot.com",
    messagingSenderId: "803980591161",
    appId: "1:803980591161:web:0dcf888b5c6e8f0de94de8",
    measurementId: "G-NWC7W37XH1"
};

const app = initializeApp(firebaseConfig);

export default app