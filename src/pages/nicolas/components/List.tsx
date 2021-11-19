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
    <div className="container d-flex justify-content-center align-items-center h-100">
    <div className="row">
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={post.url} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{post.message}</h4>
        <div  onClick={() => Likes(index)}>
                  <span className="">
                    <i className=""></i>
                    {post.likes}
                  </span>
                </div>
        <button className="btn btn-outline-secondary border-0" onClick={() => deletePost(index)}>
                <i className="fas fa-thumbs-up"></i>
                Eliminar post
              </button>
      </div>
    </div>
    </div>
  </div>
  );
};
{/*
 <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <div className="">Post Realizado</div>
        <div className="overflow  ">
          <h5 className="card-text">{post.message}</h5>
          <img src={post.url} className="card-img-top" alt="foto "></img>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <button className="" onClick={() => deletePost(index)}>
                <i className=""></i>
                Eliminar post
              </button>
            </div>
            <div className="">
              <div className="">
                <div className="" onClick={() => Likes(index)}>
                  <span className="">
                    <i className=""></i>
                    {post.likes}
                  </span>
                </div>
                <div className="">
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/}
export default ListPosts;
