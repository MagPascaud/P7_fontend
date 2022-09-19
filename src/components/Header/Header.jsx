import IconBlack from '../../assets/icon-left-font-monochrome-black.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';


//Mise en page du header
const IconBlackImg = styled.img`
height:40%;
width:40%;
`
const HeaderStyle = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${colors.background};
`


function Header() {
    return (
        <nav>

            <ul>
                <HeaderStyle />
                <li>
                    <IconBlackImg src={IconBlack} alt="icone header" />
                </li>
                <li>
                    <a href="accueil"><i class="fa-solid fa-house-blank"></i></a>

                </li>
            </ul>
        </nav>
    )
}

export default Header