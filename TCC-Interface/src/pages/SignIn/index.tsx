import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
    
  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate('/logged');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
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
      <button onClick={logOut}> Log Out</button>
    </div>
  );
};