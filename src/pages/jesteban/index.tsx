import React, { Fragment, useState } from "react";
import { Comment } from "./interfaces/Comment";
import ItemList from "./components/ItemList";
import CommentForm from "./components/CommentForm";

const JEsteban = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    return (
        <Fragment>
            <CommentForm comments={comments} setComments={setComments} />
            {comments.map((comment: Comment, i: number) => (
                <ItemList key={i} comments={comments} setComments={setComments} comment={comment} index={i} />
            ))}
        </Fragment>
    )
}

export default JEsteban;

