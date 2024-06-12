import React, { useState, useEffect } from 'react';

const ApiResponseTime = () => {
  const [responseTime, setResponseTime] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const startTime = Date.now();
      try {
        const response = await fetch('http://localhost:8000/api/posts/'); // Replace with your API URL
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      const endTime = Date.now();
      setResponseTime(endTime - startTime);
    };

    fetchData();
  }, []);

  console.log(data)

  const styles = {
    marginLeft: "20px",
}

  return (
    <div style={styles}>
      <h1>API Response Time</h1>
      {responseTime !== null ? (
        <p>Response time: {responseTime} ms</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiResponseTime;
