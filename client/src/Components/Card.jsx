import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({post}) {
  return (
    
       <div className='card' >
         <Link className='link' to={`/post/${post.id}`} >
          <span className='title' > {post.title}</span>
          <img className='img' src={post.img} alt="" />
          <p className='desc' > {post.desc} </p>
          <button className='cardButton' > Read More </button>
          </Link>
       </div>         
  );  
};
