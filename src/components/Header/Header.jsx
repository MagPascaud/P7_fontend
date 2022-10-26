import IconBlack from '../../assets/icon-left-font-monochrome-black.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';



//Mise en page du header
const IconBlackImg = styled.img`
height:40%;
width:40%;
display: flex;
flex-direction: row;
justify-content: center;
margin: auto;
`

const HeaderStyle = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${colors.background};
text-decoration: none;
font-size: 16px;
margin-bottom: 100px;
`



function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><IconBlackImg src={IconBlack} alt="icone header" /></Link>
                <HeaderStyle>
                    <Link to="/">Accueil</Link>
                    <Link to="/form/create">Créer un post</Link>
                    <Link to={"/user/" + localStorage.getItem('userId')}>Mon compte</Link>
                    <Link to="/login" >Me déconnecter</Link>
                </HeaderStyle>
            </nav>
        </header>
    )
}

export default Header