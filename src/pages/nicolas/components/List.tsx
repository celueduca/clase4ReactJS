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
                <div onClick={() => Likes(index)}>
                  <i className="fas fa-thumbs-up btn btn-outline-secondary border-0"></i>
                  <span>{post.likes}</span>
                </div>
                <div>
              

                  <button
                    onClick={() => deletePost(index)} 
                    className="noselect">
                    <span className="text">Delete</span>
                    <span className="icon">
                      <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                      </svg>
                    </span>
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
