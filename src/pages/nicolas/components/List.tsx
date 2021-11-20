import React from "react";
import { Post } from "../interface/PostNicolas";
import "./PostForm.css";

interface Props {
  post: Post;
  index: number;
  posts: Post[];
  setPosts: any;
}

const ListPosts = ({ post, index, posts, setPosts }: Props): JSX.Element => {
  const deletePost = (i: number) => {
    const newListPostss = [...posts];
    newListPostss.splice(i, 1);
    setPosts(newListPostss);
  };

  const Likes = (i: number) => {
    const newListPosts = [...posts];
    newListPosts[i].likes++;
    setPosts(newListPosts);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100 space">
      <div className="row">
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
          <div className="overflow">
            <img src={post.url} alt="a wallpaper" className="card-img-top" />
          </div>
          <div className="card-body text-light">
            <h4 className="card-title">{post.message}</h4>
            <h3 className="card-title">{post.date}</h3>
              <div className="card-footer text-muted">
                <div className="row">

            <div onClick={() => Likes(index)} >
              <i className="fas fa-thumbs-up btn btn-outline-secondary border-0"></i>
              <span  >{post.likes}</span>
            </div>
            <div>
              <button
                className="btn btn-outline-secondary border-0 "
                onClick={() => deletePost(index)}
              >
                <i className="fas fa-trash "></i>
                <span>Eliminar post</span>
              </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListPosts;
