import React , {useState}  from "react";
import { IPost } from "../../../interfaces/IPostJuanOrtiz";

interface Props {
    posts: IPost[],
    setPosts: any;
}

const PostForm = ({posts, setPosts}:Props):JSX.Element => {

    const [message, setMessage] = useState<string>("");
    const [photoURL, setPhotoURL] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Esto es para que no se refrezque la pagina
        e.preventDefault();
        addPost(message, photoURL, 0 , 0);
        setMessage("");
        setPhotoURL("");
      };

    const addPost = (message: string , photoURL:string, likes: number , disLikes: number) => {
        //Clonamos y agregamos
        const newListPosts: IPost[] = [...posts, {message, photoURL, likes, disLikes }]
        setPosts(newListPosts);
    };
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    CREACION DE POST
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Agrega el mensaje</label>
                            <input
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                type="text"
                                className="form-control"
                                id="message"
                                placeholder="Mensaje del post."/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Url de la foto</label>
                            <input
                                onChange={(e) => setPhotoURL(e.target.value)}
                                value={photoURL}
                                type="text"
                                className="form-control"
                                id="photoURL"
                                placeholder="Ingresa la url."/>
                        </div>
                        <button type="submit" className="btn btn-primary">Comentar post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostForm;