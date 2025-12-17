import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchingComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('traitement/index.java')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}

export default DataFetchingComponent;