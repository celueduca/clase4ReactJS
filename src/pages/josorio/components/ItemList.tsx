import React from "react";
import { IPost } from "../interfaces/IPost";

interface Props {
    posts: IPost[];
    post: IPost;
    setPosts: any;
    index: number
}

const ItemList = ({ posts, post, setPosts, index }: Props): JSX.Element => {

    const toogleDoneLikes = (i: number, done: boolean) => {
        const newPosts: IPost[] = [...posts];
        if (done == true) {
            newPosts[i].likes++
        }
        setPosts(newPosts);
    };

    const deletePost = (i: number) => {
        const newPosts: IPost[] = [...posts];
        newPosts.splice(i, 1)
        setPosts(newPosts);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">PUBLICACION</h5>
                <p className="card-text">{post.mensaje}</p>
            </div>
            <img className="card-img-bottom" src={post.url} alt="Card image cap"></img>
            <div className="card-footer text-muted ">
                <div className="row">
                <div className="col-6">
                        <div className="d-flex justify-content-end">
                            <div className="me-1" onClick={() => toogleDoneLikes(index,true)}>
                                <button className="btn btn-success">
                                    Like {post.likes}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={() => deletePost(index)}>
                            Eliminar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default ItemList;