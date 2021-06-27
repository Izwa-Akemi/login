import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyDH3zdQX27w2lxmOuIxsFYepisgfU_8Ii0",
        authDomain: "login-b662b.firebaseapp.com",
        projectId: "login-b662b",
        storageBucket: "login-b662b.appspot.com",
        messagingSenderId: "812442396531",
        appId: "1:812442396531:web:8d924ffd465586b2e48706",
        measurementId: "G-XLHGBY3S6M"
    }
  )
}
  
export default firebase
