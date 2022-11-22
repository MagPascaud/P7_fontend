import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './Form.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

//composant de création ou de modification d'un post
function PostForm() {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [post, setPost] = useState(null);
    const [postTitle, setPostTitle] = useState('');
    const [postDesc, setPostDesc] = useState('');
    const [postImg, setPostImg] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [fd, setFd] = useState(null);
    const [resOK, setResOK] = useState(false);

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
            .catch(e => setError(e))
    })

    useEffect(() => {
        if (!isSubmit) return

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
                setResOK(true)
            })
            .catch(e => {
                setIsSubmit(false)
            })
    })

    function submitForm(e) {
        e.preventDefault();
        const fd = new FormData();
        fd.append('postTitle', postTitle);
        fd.append('postText', postDesc);
        fd.append('image', postImg);
        fd.append('user', post ? post.userId : localStorage.getItem('userId'));
        setFd(fd);
        setIsSubmit(true);
    }

    return (
        token && !resOK ?
            <>
                <Header></Header>
                <main>
                    <h1>{(post ? 'Mettre à jour la' : 'Créer une') + ' publication'}</h1>
                    <form className='postForm' onSubmit={submitForm}>
                        <label for="title">Titre de la publication</label>
                        <input type="text" name="title" id="title" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)}></input>
                        <label for="desc">Description de la publication</label>
                        <input type="text" name="desc" id="desc" required value={postDesc} onChange={(e) => setPostDesc(e.target.value)}></input>
                        <label for="img">Image de la publication</label>
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