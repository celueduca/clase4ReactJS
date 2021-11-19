import React, { Fragment, useState } from 'react';
import ItemShow from "./components/ItemShow"
import ItemList from './components/ItemList';
import { IPost } from "./interfaces/IPost";


const JOsorio = (): JSX.Element => {

  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <Fragment>
      <ItemShow posts={posts} setPosts={setPosts} />

      {posts.map((post: IPost, i: number) => (
        <ItemList key={i} posts={posts} setPosts={setPosts} post={post} index={i} />
      ))}
    </Fragment>
  );
};

export default JOsorio


