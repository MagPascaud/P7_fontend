import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './Form.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useCallback } from 'react';

//composant de création ou de modification d'un post
function PostForm() {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const [post, setPost] = useState();
    const [postTitle, setPostTitle] = useState('');
    const [postDesc, setPostDesc] = useState('');
    const [postImg, setPostImg] = useState('');


    useEffect(() => {
        if (id === 'create') return
        fetch('http://localhost:3000/api/posts/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(post => {
                setPost(post);
                setPostTitle(post.postTitle);
                setPostDesc(post.postText);
            })
    }, [id, token])

    const submitForm = useCallback(() => {
        const fd = new FormData();
        fd.append('postTitle', postTitle);
        fd.append('postText', postDesc);
        fd.append('image', postImg);
        fd.append('user', post ? post.user._id : localStorage.getItem('userId'));

        fetch('http://localhost:3000/api/posts/' + (post ? post._id : ''), {
            method: post ? 'PUT' : 'POST',
            body: fd,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error(res.statusText)
                return res.json()
            })
            .then(value => {
                window.location.href = '/'
            })
    }, [postTitle, postDesc, postImg, post])

    const handleChangeTitle = (e) => {
        setPostTitle(e.target.value);
        console.log(postTitle);
    }

    return (
        token ?
            <>
                <Header></Header>
                <main>
                    <h1>{(post ? 'Mettre à jour la' : 'Créer une') + ' publication'}</h1>
                    <form className='postForm' onSubmit={(e) => { e.preventDefault(); submitForm() }}>
                        <label htmlFor="title">Titre de la publication</label>
                        <input type="text" name="title" id="title" required value={postTitle} onChange={handleChangeTitle}></input>
                        <label htmlFor="desc">Description de la publication</label>
                        <input type="text" name="desc" id="desc" required value={postDesc} onChange={(e) => setPostDesc(e.target.value)}></input>
                        <label htmlFor="img">Image de la publication</label>
                        <input type="file" accept='.jpeg, .jpg, .gif, .png, .webp' name="img" id="img" required onChange={(e) => setPostImg(e.target.files[0])}></input>

                        <button type='submit' className='form'>{post ? 'Mettre à jour' : 'Créer'}</button>
                    </form>

                </main>
                <Footer></Footer>
            </>
            : <Navigate to={!token ? '/login' : '/'}></Navigate>
    )
}
export default PostForm