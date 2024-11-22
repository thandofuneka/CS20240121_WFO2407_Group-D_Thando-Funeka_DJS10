import { useState, useEffect } from 'react'
import PostList from './PostList';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <PostList posts={posts} error={error} />
    </div>
  )
}

export default App
