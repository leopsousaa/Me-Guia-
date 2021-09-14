import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDYVndOrenDUDmPwQHk2GN2eQ7Ha8_gRr4",
  authDomain: "me-guiae.firebaseapp.com",
  databaseURL: "https://me-guiae-default-rtdb.firebaseio.com",
  projectId: "me-guiae",
  storageBucket: "me-guiae.appspot.com",
  messagingSenderId: "759065742560",
  appId: "1:759065742560:web:9140f6a8761cbd99d2d485",
  measurementId: "G-L07KSJLSYS"
}

firebase.initializeApp(firebaseConfig)

const DB = firebase.firestore()

export { firebase, DB }