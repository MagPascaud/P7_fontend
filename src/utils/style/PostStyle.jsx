import styled from "styled-components";
import colors from './colors';



const BackgroundPost = styled.div`
background-color: ${colors.backgroundPost};
border-radius: 10px 5px #000000;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

`

function PostStyle() {
    return (
        <BackgroundPost />

    )
}

export default PostStyle
