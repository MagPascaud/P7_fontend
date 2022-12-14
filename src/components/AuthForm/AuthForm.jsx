import './Auth.css';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

//composant de l'authentification login et signup
function AuthForm(props) {
    const isSignUp = props.isSignUp;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [formSubmit, setFormSubmit] = useState(false);
    const [requestOK, setRequestOK] = useState(false);
    const [requestNOK, setRequestNOK] = useState(false);

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
            .then(res => {
                if (!res.ok) throw new Error(res.statusText)
                return res.json()
            })
            .then(value => {
                if (!isSignUp) {
                    localStorage.setItem('token', value.token);
                    localStorage.setItem('userId', value.userId);
                    localStorage.setItem('isAdmin', value.isAdmin);
                };
                setRequestOK(true)
            })
            .catch(e => {
                setFormSubmit(false)
                setRequestNOK(true);
            })
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
                                <label htmlFor="userName">Votre nom d'utilisateur :</label>
                                <input type="text" name="userName" id="userName" required value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                            </> :
                            <></>
                    }

                </div>
                <label htmlFor="email">Votre adresse mail :</label>
                <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="password">Votre mot de passe :</label>
                <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='form' type="submit">{isSignUp ? "CR??ER SON COMPTE" : "SE CONNECTER"}</button>
                <div>{requestNOK ? 'Une erreur est survenue' : ''}</div>
            </form>
            : <Navigate to={isSignUp ? '/login' : '/'} />
    )

}


export default AuthForm