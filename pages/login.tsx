import firebase from '../firebase';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const logIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        alert(
          `Login in successfully ${user} 😍.`
        );
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(
          `Login in fail. errorCode: ${errorCode}, errorMessage: ${errorMessage} :(.`
        );
      });
  }

  return (
    <div className={styles.container}>
      <label>email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="text" />
      <label>password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="passsword" />
      <button onClick={logIn}>log in</button>      
    </div>
  )
}
