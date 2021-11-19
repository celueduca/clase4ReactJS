import React from 'react'
import { IPost } from '../../interfaces/IPostJuanOrtiz'
import ListPosts from './components/ListPosts';
import PostForm from './components/PostForm'

const JOrtiz = ():JSX.Element => {
    // Porque si ambos guardan IPost setPosts no lo reconoce en las interface
    const [posts, setPosts] = React.useState<IPost[]>([]);
    return (
        <React.Fragment>
            {/* Este formulario va a llenar posts */}
            <PostForm posts={posts} setPosts={setPosts} ></PostForm>

            {/* Aqui vamos a recorrer la lista de posts que existan */}
            {posts.map((post:IPost , i:number ) => (
                <ListPosts key={i} post={post} index={i} posts={posts} setPosts={setPosts} ></ListPosts>
            ))}
            
        </React.Fragment>
    )
}

export default JOrtiz

