import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error.message))
  }, [])
  return (
    <div>
      {posts.map((post, key) => (
        <Post {...post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
