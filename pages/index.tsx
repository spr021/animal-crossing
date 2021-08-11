import Head from 'next/head'
import LoginHooks from '../component/login'
import LogoutHooks from '../component/logout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import firebase from '../firebase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [name, setName]= useState("")
  const [image, setImage]= useState("")
  const [price, setPrice]= useState("")
  const [category, setCategory]= useState("")
  const [object, setObject] = useState<any>([])
  const user = firebase.auth().currentUser

  const sendToDatabase = () => {
    const ref = firebase.database().ref("object")
    const object = {
      name,
      image,
      price,
      category,
    }
    ref.push(object)
  }

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      alert(
        `signOut in successfully 😍.`
      );
    }).catch((error) => {
      alert(
        `signOut in fail :(.`
      );
    });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref("object").on("value", (snapshot) => {
          const objects = snapshot.val()
          const objectList = []
          for(let item in objects) {
            objectList.push(objects[item])
          }
          setObject(objectList)
        })
        var uid = user.uid;
        // ...
      } else {
        router.push("/login")
        // ...
      }
    });
  },[router])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal crossing</title>
        <meta name="description" content="Animal crossing web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <LoginHooks />
        <LogoutHooks />
        <button onClick={signOut}>signOut</button>
      </header>
      
      <main className={styles.main}>
        <label>name</label>
        <input onChange={(e) => setName(e.target.value)} type="text"></input>
        <label>image</label>
        <input onChange={(e) => setImage(e.target.value)} type="text"></input>
        <label>price</label>
        <input onChange={(e) => setPrice(e.target.value)} type="number"></input>
        <label>category</label>
        <select name="price" onChange={(e) => setCategory(e.target.value)}>
          <option value="Housewares">Housewares</option>
          <option value="Clothing">Clothing</option>
          <option value="Fossils">Fossils</option>
          <option value="Villagers">Villagers</option>
          <option value="Materials">Materials</option>
          <option value="DIY Recipes">DIY Recipes</option>
        </select>
        <button onClick={sendToDatabase}>send to data base</button>
        <div className={styles.card}>
          {object.map((item: any) => 
            <div className={styles.card} style={{width: "200px", height: "300px", flexDirection: "column", padding: "0"}} key={item.name}>
              <Image src={item.image} alt={item.name} width="100" height="100"></Image>
              <h4>{item.name}</h4>
              <h5>{item.price}</h5>
              <h5>{item.category}</h5>
            </div>
          )}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
