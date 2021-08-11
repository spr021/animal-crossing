import firebase from '../firebase';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(false)

  const signUp = () => {
    if (password === confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          alert(
            `SignUp in successfully ${user} 😍.`
          );
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(
            `SignUp in fail. errorCode: ${errorCode}, errorMessage: ${errorMessage} :(.`
          );
        });
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <label>email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="text" />
      <label>password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="passsword" />
      <label>confirm password</label>
      <input onChange={(e) => setConfirmPassword(e.target.value)} type="passsword" />
      <button onClick={signUp}>sign up</button>

      {error && (
        <div style={{backgroundColor: "red", width: "100%", height: "200px"}}>password and confirm password not equal</div>
      )}
      
    </div>
  )
}
