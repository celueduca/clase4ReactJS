import React from "react";
import { IPost } from "../../../interfaces/IPostJuanOrtiz";

interface Props {
    post: IPost;
    index: number;
    posts: IPost[];
    setPosts: any;
}

const ListPosts = ({post,index, posts, setPosts}:Props):JSX.Element => {
    const toogleLikes = (i:number, isLike:boolean) => {
        const newListPosts = [...posts]
        isLike ?
            newListPosts[i].likes ++ :
            newListPosts[i].disLikes ++
        setPosts(newListPosts);
    }
    const deletePost = (i:number) => {
        const newListPosts = [...posts];
        newListPosts.splice(i,1)
        setPosts(newListPosts);
    }
    return (
        <div className="card mt-2">
            <div className="card-header">
                Post Realizado
            </div>
            <div className="card-body">
                <h5 className="card-title">{post.message}</h5>
                <img src={post.photoURL} className="img-thumbnail" alt="foto de algo"></img> 
            </div>
            <div className="card-footer text-muted ">
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-sm btn-outline-danger" onClick={() => deletePost(index)}>
                            <i className="fas fa-trash"></i>
                            Eliminar post
                        </button>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <div className="me-3" onClick={() => toogleLikes(index,true)}>
                                <span className="badge bg-primary p-2">
                                    <i className="fas fa-thumbs-up"></i>
                                    {post.likes}
                                </span>
                            </div>
                            <div onClick={() => toogleLikes(index,false)}>
                                <span className="badge bg-danger p-2">
                                    <i className="fas fa-thumbs-down"></i>
                                    {post.disLikes}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPosts;