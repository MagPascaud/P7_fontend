import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import "../User/UserPage.css";

function User() {
    const token = localStorage.getItem('token');
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState('');

    const currentUserId = localStorage.getItem('userId');
    const isAdmin = localStorage.getItem('isAdmin');
    let navigate = useNavigate();
    console.log(isAdmin === 'true', user._id === currentUserId)


    useEffect(() => {
        fetch('http://localhost:3000/api/users/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error(res.statusText)
                return res.json()
            })
            .then(user => {
                setUser(user);
                setPosts(user.posts || []);
            })
            .catch(e => setError(e))

    }, [id, token]);

    const onDelete = useCallback(() => {
        const conf = window.confirm('Êtes-vous certain de vouloir supprimer ce compte ?');
        if (conf) {
            console.log('ok')

            fetch('http://localhost:3000/api/users/' + id, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then(res => {
                    if (!res.ok) throw new Error(res.statusText)
                    return res.json()
                })
                .then(value => {
                    if (isAdmin) {
                        navigate('/')
                    }
                    else {
                        navigate('/login')

                    }
                })
        }

    }, [navigate, isAdmin, id, token])

    const submitForm = useCallback(() => {
        const fd = new FormData();
        fd.append('userName', userName);
        if (userImage) {
            fd.append('image', userImage);
        }

        fetch('http://localhost:3000/api/users/' + user._id, {
            method: 'PUT',
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
                // window.location.reload(false)
            })
    }, [token, userName, userImage, user._id])
    return (
        token && !error ?
            <>
                <Header />
                <main>
                    <header className='userPage'>
                        <div className="userLine">
                            <img src={`${user.userImageUrl}`} alt="" className="" />
                            <span><p>{`${user.userName}`}</p></span>
                        </div>
                        {
                            user._id === currentUserId || isAdmin ?
                                <form className="userForm" onSubmit={(e) => { e.preventDefault(); submitForm() }}>
                                    <div className="userLine">
                                        <label htmlFor="userName">Modifier mon nom d'utilisateur :</label>
                                        <input type="text" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} ></input>

                                        <label htmlFor="img">Modifier ma photo de profil :</label>
                                        <input type="file" accept='.jpeg, .jpg, .gif, .png, .webp' name="img" id="img" onChange={(e) => setUserImage(e.target.files[0])}></input>
                                        <button type='submit' className='form'>Mettre à jour</button>
                                    </div>
                                </form> : <></>
                        }
                        <div className="delete">
                            <button type="button" onClick={onDelete}>
                                <p>SUPPRIMER LE COMPTE</p>
                            </button>
                        </div>

                    </header>
                    <h2>Publications</h2>

                    {
                        posts.map(post =>
                            <Post
                                postTitle={post.postTitle}
                                key={post._id}
                                _id={post._id}
                                postText={post.postText}
                                user={post.user}
                                likes={post.likes}
                                imageUrl={post.imageUrl}
                                createdAt={post.createdAt}
                                updatedAt={post.updatedAt}
                            ></Post>
                        )
                    }
                </main>
                <Footer />
            </>
            : <Navigate to={'/login'}></Navigate>
    )
}

export default User