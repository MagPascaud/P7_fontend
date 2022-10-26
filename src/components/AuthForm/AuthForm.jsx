import './Auth.css';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function AuthForm(props) {
    const isSignUp = props.isSignUp;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [requestOK, setRequestOK] = useState(false);

    useEffect(() => {
        if (!formSubmit) return
        fetch('http://localhost:3000/api/auth/' + (isSignUp ? 'signup' : 'login'), {
            method: 'POST',
            body: JSON.stringify(isSignUp ? {
                email, password, userName
            } : { email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(value => {
                if (!isSignUp) {
                    localStorage.setItem('token', value.token);
                    localStorage.setItem('userId', value.userId);
                    localStorage.setItem('isAdmin', value.isAdmin);
                };
                setRequestOK(true)
            })
            .catch(e => setFormSubmit(false))
    });

    const submitForm = (e) => {
        e.preventDefault()
        setFormSubmit(true);
    }

    return (
        !requestOK ?
            <form className="authForm" onSubmit={submitForm} >
                <div className="authForm">
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
                <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='button' type="submit">{isSignUp ? "Créer son compte" : "Se connecter"}</button>
            </form>
            : <Navigate to={isSignUp ? '/login' : '/'} />
    )

}


export default AuthForm