import styled from "styled-components";
import colors from '../style/colors';


const Title = styled.h3`
font-weight: bold;
`
const BackgroundPost = styled.main`
background-color: ${colors.backgroundPost};
border: solid 10px ${colors.primary};
`



function PostStyle() {
    return (
        <main>
            <Title />
            <BackgroundPost />
        </main>
    )
}

export default PostStyle
