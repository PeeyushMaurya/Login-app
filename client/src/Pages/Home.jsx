import React from 'react';
 import Card from '../Components/Card';
import {posts} from '../Pages/data'

export default function Home() {
  return (
      <div className="home">
          {posts.map(post => (
              <Card key={post.id} post={post} />
          ))}
      </div>
  )
}
