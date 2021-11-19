import React, { useState } from "react";
import { Comment } from "../interfaces/Comment";

interface Props {
    comments: Comment[];
    setComments: any;
}

const CommentForm = ({ comments, setComments }: Props) => {
    const [newComment, setNewComment] = useState<string>("");
    const [newPhoto, setNewPhoto] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(newComment, newPhoto);
        setNewComment("");
        setNewPhoto("");
    };

    const addTask = (text: string, url: string) => {
        const listComments: Comment[] = [...comments, { text, url, like: 0 }];
        setComments(listComments);
    };
    return (
        <div className="card">
            <div className="card-boy">
                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        placeholder="Ingrese el mensaje"
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                    ></input>
                    <input
                        className="form-control mt-4"
                        placeholder="Ingrese la Url"
                        onChange={(e) => setNewPhoto(e.target.value)}
                        value={newPhoto}
                    ></input>
                    <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-info" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CommentForm;