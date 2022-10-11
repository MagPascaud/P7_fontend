import './Auth.css';
import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function AuthForm(props) {
    const isSignUp = props.isSignUp;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const submitForm = (e) => {
        e.preventDefault()
        console.log("test")
        console.log(email, password, userName)
    }

    return (
        <form className="authForm" onSubmit={submitForm} >
            <div>
                {
                    isSignUp ?
                        <>
                            <label for="userName">Votre nom d'utilisateur :</label>
                            <input type="text" name="userName" id="userName" required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                        </> :
                        <></>
                }

            </div>
            <label for="email">Votre adresse mail :</label>
            <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label for="password">Votre mot de passe :</label>
            <input type="text" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">{isSignUp ? "Créer son compte" : "Se connecter"}</button>
        </form>
    )

}


export default AuthForm