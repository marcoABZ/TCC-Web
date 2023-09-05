import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth);
  }, []);

  console.log(auth?.currentUser);

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log(auth.currentUser)
        navigate('/logged');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Sign In</button>
    </div>
  );
};
