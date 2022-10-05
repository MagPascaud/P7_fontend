import './Auth.css';

function AuthForm() {
    return (
        <form className="authForm">
            <h1>CONNEXION</h1>
            <label for="userName">Votre nom d'utilisateur :</label><input type="text" name="userName" id="userName" required autoFocus >
            </input>
            <label for="email">Votre adresse mail :</label><input type="email" name="email" id="email" required >
            </input>
            <label for="password">Votre mot de passe :</label><input type="text" name="password" id="password" required >
            </input>
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default AuthForm