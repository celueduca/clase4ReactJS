import React, { useState } from 'react'
import { IPost } from "../interfaces/IPost";

interface Props {
    posts: IPost[];
    setPosts: any;

}

const ItemShow = ({posts, setPosts}: Props):JSX.Element =>{

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addPost(newPost, newUrl, 0);
        setNewPost("");
        setNewUrl("")
    };

    const toogleDonePost = (i: number) => {
        const newPosts: IPost[] = [...posts];
        setPosts(newPosts);
    };

    const [newPost, setNewPost] = useState<string>("");
    const [newUrl, setNewUrl] = useState<string>("");

    const addPost = (mensaje: string, url: string, likes:number) => {
        const listPosts: IPost[] = [...posts, { mensaje, url, likes }];
        setPosts(listPosts);
    };
    
     return (
        <div>
            <h1>Hola soy Juan Osorio</h1>
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">PUBLICACIONES</div>
                <div className="card-body">
                    <h5 className="card-title">HAGA UN POST</h5>
                    <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder="Ingrese un mensaje"
                        onChange={(e) => setNewPost(e.target.value)} value={newPost} /> <p> </p>
                    <input type="text" className="form-control" placeholder="Ingrese URL de una imagen"
                        onChange={(e) => setNewUrl(e.target.value)} value={newUrl} />

                    <div className="d-grid gap-2 mt-2">
                        <button className="btn btn-warning" onClick={() => addPost} type="submit">
                            POST
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default ItemShow;