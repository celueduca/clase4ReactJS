import React , {useState}  from "react";
import { Post } from "../interface/PostNicolas";

interface Props {
    posts: Post[];
    setPosts: any;
}

const PostForm = ({posts, setPosts}: Props): JSX.Element =>{
    const [message, setMessage] = useState<string>("");
    const [url,setUrl]= useState<string>("");
    const date = new Date();
    const today=`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()} ` 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        Post(url,0,today,message);
        setMessage("");
        setUrl("")
    };

    const Post = (url: string, likes: number, date: string, message: string) =>{
        const newList:Post[]= [...posts, {url,likes,date,message}]
        setPosts(newList);
    };
    return (
        <div>
            <div className="card">
                <div className="card-header" >
                    Create a Post
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                type="text"
                                className="form-control"
                                id="message"
                                placeholder="Post mesagge."/>
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={(e) => setUrl(e.target.value)}
                                value={url}
                                type="text"
                                className="form-control"
                                id="photoURL"
                                placeholder="url."/>
                        </div>
                        <button type="submit" className="btn btn-info">subbmit</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default PostForm