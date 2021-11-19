import React from 'react'
import { IPost } from '../../interfaces/IPostRodrigo'
import PostForm from './Componentes/PostForm';
import PostList from './Componentes/PostList';




const Rodrigo = (): JSX.Element => {
    const [posts, setPosts] = React.useState<IPost[]>([]);

    return (
        <React.Fragment>
            <PostForm posts={posts} setPosts={setPosts}></PostForm>
            {posts.map((post:IPost, i:number) => (
            <PostList key={i} post={post} posts={posts} index={i} setPosts={setPosts} ></PostList>))
            } 
        </React.Fragment>
    )
}

export default Rodrigo