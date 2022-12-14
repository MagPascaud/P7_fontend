import icon from '../../assets/icon.png'
import styled from 'styled-components';
import colors from '../../utils/style/colors';



//icone Groupomania
const IconImg = styled.img`
height:80px;
width:80px;
`
//mise en page du footer
const FooterBanner = styled.footer`
border-top: solid 2px black;
margin-top: 20px;
padding-top: 20px;
color: ${colors.tertiary};
`
//composant du Footer
function Footer() {
    return (
        <footer>
            <FooterBanner>
                <IconImg src={icon} alt="icone Groupomania" />
                <h2>GROUPOMANIA</h2>
                <h3>Spécialiste de la grande distribution</h3>
                <p>Contacter l'administrateur : <a href="mailto:administrateur@groupomania.com">administrateur@groupomania.com</a></p>
            </FooterBanner>
        </footer>
    )
}

export default Footer