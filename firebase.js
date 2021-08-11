import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPkCxRJIoN5IkoBl1vX2WdHux2KpWL8IU",
  authDomain: "animal-crossing-321008.firebaseapp.com",
  projectId: "animal-crossing-321008",
  storageBucket: "animal-crossing-321008.appspot.com",
  messagingSenderId: "1035148078377",
  appId: "1:1035148078377:web:c93b9bc7d6fca13f6fdb38",
  appName: "animal crossing",
  measurementId: "G-C222EHL49D"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

// firebase.initializeApp(firebaseConfig)

export default firebase