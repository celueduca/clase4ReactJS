import React from "react";
import { IPost } from "../../../interfaces/IPostRodrigo";


interface Props {
    posts: IPost[];
    post: IPost;
    index: number;
    setPosts: any;
}

    const PostList = ({posts, index, post, setPosts}:Props):JSX.Element =>{
        
        const toogleMegusta = (i: number, meGusta:boolean) => {
            const newPostList = [...posts];
            newPostList[i].meGusta++;
            newPostList[i].noMeGusta++;
            setPosts(newPostList);
        };

        const deleteThePost = (i: number) => {
            const newPosts: IPost[] = [...posts];
            newPosts.splice(i, 1);
            setPosts(newPosts);
        };

    return (
        <div className="row">
            <div className="col-8" >
                POST CREADO            
            </div>
                <div className="row">
                <h5 className="card-title">{post.mensaje}</h5>
                <img src={post.fotoUrl} className="img-thumbnail" alt="foto"></img> 
            </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <div className="me-3" onClick={() => toogleMegusta(index,true)}>
                        <span className="badge bg-primary p-2">
                            <i className="fas fa-thumbs-up"></i>
                                ME GUSTA
                                {post.meGusta}
                                    </span>
                                    </div>
                                    <div onClick={() => toogleMegusta(index,false)}>
                                    <span className="badge bg-danger p-2">
                                        <i className="fas fa-thumbs-down"></i>
                                        NO ME GUSTA
                                        {post.noMeGusta}
                                    </span>
                                </div>
                        </div>
                        </div>
                            <div className="card-footer text-muted ">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-sm btn-outline-danger" onClick={() => deleteThePost(index)}>
                                    <i className="fas fa-trash"></i>
                                    ELIMINAR POST
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
export default PostList;