import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from '../../components/Footer/Footer';


function Login() {
    localStorage.clear();
    return (
        <>
            <h1>VOUS AVEZ DEJA UN COMPTE</h1>
            <AuthForm></AuthForm>
            <div className="connexion">
                <p> Vous n'avez pas encore de compte : </p>
                <Link to="/signup"> Créer son compte</Link>
            </div>
            <Footer />
        </>
    )
}

export default Login