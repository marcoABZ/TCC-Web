import { auth, db } from "../../services/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(auth?.currentUser?.uid);
    if (!auth.currentUser) {
        navigate("/", { replace: true });
    }

    const docRef = doc(db, `/users/${auth?.currentUser?.uid}`);
    getDoc(docRef)
      .then((data) => {
        getDoc(data.data()?.logs)
          .then((data2) => {
            console.log(data2.data())
          })
          .catch((error) => {
            console.log("Erro 2")
          })
      })
      .catch((error) => {
        console.log(error);
      });
    //const doc = db.collection('users').where('uid', '==', auth?.currentUser?.uid).get();
    //console.log(doc);
  }, []);

  return (
    <div>
        <h1>Hello</h1>
    </div>
  );
};
