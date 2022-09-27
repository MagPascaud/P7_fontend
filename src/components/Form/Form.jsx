import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useState, useEffect } from 'react';
// import Post from '../components/Post/Post';
// import colors from '../../utils/style/colors';
// import { Link } from 'react-router-dom';


const PostFormStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 300px;
`

const PostFormInput = styled.input`
font-family: Lato, Trebuchet MS, Helvetica, sans-serif;
font-size: 24px;
padding: 10px;
margin-bottom: 10px;
border: none;
`
const PostFormText = styled.textarea`
padding: 15px;
font-size: 20px;
margin-bottom: 10px;
border: none;
`
const PostFormButton = styled.button`
height: 100px;
background-color: ${colors.backgroundPost};
border: none;
`

function PostForm({ post }) {
    const [newPost, setPost] = useState({})
    function createPost() {

    }
    function updatePost() {

    }
    function submitForm(formValue) {

    }
    return (
        <form>
            <PostFormStyle>
                <PostFormInput type="text" name="Titre" id="title" required autoFocus />
                <PostFormText name="description" id="description" cols="30" rows="10" required />
                <input type="file" accept='.jpeg,.jpg,.png,.gif' />
                <PostFormButton>
                    <button>
                        Envoyer
                    </button>
                </PostFormButton>
            </PostFormStyle>
        </form>
    )
}
export default PostForm