import icon from '../../assets/icon-left-font-monochrome-black.png';
import { Link } from 'react-router-dom';
import './Header.css';

// //Mise en page du header
// const IconBlackImg = styled.img`
// height:40%;
// width:40%;
// display: flex;
// flex-direction: row;
// justify-content: center;
// margin: auto;
// `

// const HeaderStyle = styled.header`
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// background-color: ${colors.backgroundPost};
// text-decoration: none;
// font-size: 30px;
// padding: 20px;
// margin-bottom: 80px;
// `

//composant du Header
function Header() {
    return (
        <header>
            <nav >
                <div>
                    <img className='iconBlackImg' src={icon} alt="logo Groupomania" /></div>
                <div className='headerStyle'>
                    <Link to="/" className='icone'><span class="material-symbols-outlined" title='Accueil'>
                        home
                    </span></Link>
                    <Link to="/form/create" className='icone'><span class="material-symbols-outlined" title='Créer un post'>
                        library_add
                    </span></Link>
                    <Link to={"/user/" + localStorage.getItem('userId')} className='icone'><span class="material-symbols-outlined" title='Mon compte'>
                        person_filled
                    </span></Link>
                    <Link to="/login" className='icone'><span class="material-symbols-outlined" title='Se déconnecter'>
                        logout
                    </span></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header