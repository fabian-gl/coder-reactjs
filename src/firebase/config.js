import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC67kMHnqS1FQqi1JVT1E-5qzthlVEvlKM",
    authDomain: "ecommerce-store-d3f68.firebaseapp.com",
    projectId: "ecommerce-store-d3f68",
    storageBucket: "ecommerce-store-d3f68.appspot.com",
    messagingSenderId: "1061277965413",
    appId: "1:1061277965413:web:a9aae4d870b9aaa38dba8c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app

export const getFirestoreConnection = () => firebase.firestore(app)