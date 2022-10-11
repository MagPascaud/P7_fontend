import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

function Login() {

    return (
        <>
            <h1>VOUS AVEZ DEJA UN COMPTE</h1>
            <AuthForm></AuthForm>
            <div className="connexion">
                <p> Vous n'avez pas encore de compte : </p>
                <Link to="/signup"> Créer son compte</Link>
            </div>
        </>
    )
}

export default Login