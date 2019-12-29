import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAE_EoZBl5Rd_iEWfrDdOU-kIYzS-Rw6SI",
    authDomain: "serschborng-830c3.firebaseapp.com",
    databaseURL: "https://serschborng-830c3.firebaseio.com",
    projectId: "serschborng-830c3",
    storageBucket: "serschborng-830c3.appspot.com",
    messagingSenderId: "793654958178"
};
let app = Firebase.initializeApp(config);
export const db = app.database();