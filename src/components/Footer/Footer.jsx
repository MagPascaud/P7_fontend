import icon from '../../assets/icon.png'
import styled from 'styled-components';



//icone Groupomania
const IconImg = styled.img`
height:80px;
width:80px;
`

function Footer() {
    return (
        <div>
            <IconImg src={icon} alt="icone Groupomania" />
            <h2>GROUPOMANIA</h2>
            <h3>Spécialiste de la grande distribution</h3>
            <p>Contacter l'administrateur : <a href="mailtoadministrateur@groupomania.com">administrateur@groupomania.com</a></p>
        </div>
    )
}

export default Footer