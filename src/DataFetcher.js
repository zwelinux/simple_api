// src/PostFetcher.js
import React, { useState, useEffect } from 'react';
import ActionAreaCard from './ActionAreaCard';

const PostFetcher = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/posts/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  const styles = {
    marginLeft: "20px",
    }

  return (
    <div style={styles}>
      <h1>Fetched Posts from APIs -  - Counts</h1>
      <ul>
        {posts.map(post => (
          <ActionAreaCard title={post.title} content={post.content} link={post.link} link_name={post.link_name} author={post.author} date_posted={post.date_posted} />

        ))}
      </ul>
    </div>
  );
};

export default PostFetcher;
