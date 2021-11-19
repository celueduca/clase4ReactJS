import React from "react";
import { setCommentRange } from "typescript";
import { Comment } from "../interfaces/Comment";

interface Props {
  comments: Comment[];
  comment: Comment;
  setComments: any;
  index: number;

}

const ItemList = ({ comments, comment, setComments, index }: Props) => {
  let like: number = 0;

  const toogleDoneComment = (i: number) => {
    const newComments: Comment[] = [...comments];
    newComments[i].like += 1;
    setComments(newComments);
  }


  const deleteComment = (i: number) => {
    const newComments: Comment[] = [...comments];
    newComments.splice(i, 1);
    setComments(newComments);
  };

  return (
    <div className="card card-body mt-2">
      <h2>
        {comment.text}
      </h2>
      <div className="mt-4">
        <img src={comment.url} alt="" />
      </div>
      <div className="mt-4">
        <button className="btn btn-info" onClick={() => toogleDoneComment(index)}>
          {comment.text ? "Like " : "Terminar"}{comment.like}
        </button>
        <button className="btn btn-danger" onClick={() => deleteComment(index)}>
          Eliminar
        </button>
      </div>
    </div>
  );
}
export default ItemList;