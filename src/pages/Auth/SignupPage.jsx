import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from '../../components/Footer/Footer';


function Signup() {

    return (
        <>
            <h1>CRÉEZ VOTRE COMPTE</h1>
            <AuthForm
                isSignUp="true"
            >
            </AuthForm>
            <div className="connexion">
                <p> Vous avez déjà un compte :</p>
                <Link to="/login">Se connecter</Link>
            </div>
            <Footer />
        </>
    )
}

export default Signup