import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import 'bootstrap/dist/css/bootstrap.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth);
  }, []);

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log(auth.currentUser)
        navigate('/logged');
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.errorMessage);
      });
  };

  return (
    <div className="form-container">
      <div className="container g-0">
        <div className="row justify-content-center title">
          <h1>Log In</h1>
        </div>
        <div className="row align-items-end g-0">
          <div className="col">
            <Input label="Email" placeholder="Digite seu email" type="email"></Input>
          </div>
        </div>
        <div className="row g-0">
          <div className="col">
            <Input label="Senha" placeholder="Digite sua senha" type="password" helperText={errorMessage}></Input>
          </div>
        </div>
        <button onClick={signIn}> Sign In</button>
      </div>
    </div>
  );
};
