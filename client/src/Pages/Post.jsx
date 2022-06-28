import React from 'react';
import { useLocation } from 'react-router-dom';
import {posts} from "../Pages/data"

export default function Post() {

  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const post = posts.find((p) => p.id.toString() === path );
  console.log(location);
  return ( 
  <div>
    <img className='postImg' src={post.img} alt="" />
    <h1 className='postTitle'> {post.title} </h1>
    <p className='postDesc' > {post.desc} </p>
    <p className='postLongDesc'> {post.longDesc} </p>
  </div>
  );
};
