import { GoogleLogo } from 'phosphor-react';
import './signIn.scss';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';

export function SignIn() {

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="container">
                <h1>Acesse sua conta</h1>
                
                <button type="button" className="button" onClick={handleGoogleSignIn}>
                    <GoogleLogo></GoogleLogo>
                    Log-in com Google
                </button>
            </div>
        </>
    )
}