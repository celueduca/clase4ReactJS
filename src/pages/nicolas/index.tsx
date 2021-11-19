import React from 'react'
import ListPosts from './components/List';
//import listPosts from './components/List';
import PostForm from './components/PostForm';
import { Post } from './interface/PostNicolas'

const Nicolas = () => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    return (
        <React.Fragment>
            <PostForm posts={posts} setPosts={setPosts}></PostForm>
        
          {posts.map((post:Post , i:number ) => (
          <ListPosts key={i} post={post} index={i} posts={posts} setPosts={setPosts}></ListPosts>
          ))}
        </React.Fragment>
    )
}

export default Nicolas