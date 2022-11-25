import { useCallback, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
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
    // const [userName, setUserName] = useState("");


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
                    window.location.reload(false)
                })
        }

    }, [id, token])

    // const onUpdate

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
                        <div className="userLine">
                            <p>Modifier mon nom d'utilisateur</p>
                            <input type="text" name="userName" id="userName" ></input>
                            <button type='submit' className='form'>Mettre à jour</button>

                        </div>
                        <div className="userLine">
                            <p>Modifier ma photo de profil</p>
                            <input type="file" accept='.jpeg, .jpg, .gif, .png, .webp' name="img" id="img" ></input>
                            <button type='submit' className='form'>Mettre à jour</button>

                        </div>
                        <div className="delete">
                            <button className="" onClick={onDelete}>
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