import React, { useState } from "react";
import { IPost } from "../../../interfaces/IPostRodrigo";

interface Props{
    posts: IPost[];
    setPosts: any;
}


const PostForm = ({posts, setPosts}: Props):JSX.Element =>{

    const [mensaje, setMensaje] = useState<string>("");
    const [fotoUrl, setFotoUrl] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addPost(mensaje, fotoUrl, 0 , 0);
        setMensaje("");
        setFotoUrl("");
      };

    const addPost = (mensaje: string , fotoUrl:string, meGusta: number , noMeGusta: number) => {
        const newPostList: IPost[] = [...posts, {mensaje, fotoUrl, meGusta, noMeGusta}]
        setPosts(newPostList);
    };
        return (
                <div>
                    <div className="row">
                        <div className="col">
                            CREA TU POST AQUI
                        </div>  
                        <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Escribe tu mensaje</label>
                                <input
                                    onChange={(e) => setMensaje(e.target.value)}
                                    value={mensaje}
                                    type="text"
                                    className="form-control"
                                    id="message"
                                    placeholder="Mensaje del post."/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Direccion Url de tu foto</label>
                                <input
                                    onChange={(e) => setFotoUrl(e.target.value)}
                                    value={fotoUrl}
                                    type="text"
                                    className="form-control"
                                    id="photoURL"
                                    placeholder="Ingresa la url."/>
                            </div>
                            <button type="submit" className="btn btn-primary">Agrega tu post</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}
export default PostForm;