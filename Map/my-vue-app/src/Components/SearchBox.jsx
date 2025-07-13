import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const SearchBox = React.memo(({ setCoordinates }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchData = useCallback(async () => {
    if (!query) return;
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    setResults(res.data);
  }, [query]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timeout);
  }, [query, fetchData]);

  return (
    <div style={{ padding: "10px" }}>
      <input
        type="text"
        placeholder="🔍 Search for a place..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '300px', padding: '8px', borderRadius: '5px' }}
      />
      <div style={{ background: '#f0f0f0', padding: '10px' }}>
        {results.map((item, idx) => (
          <div
            key={idx}
            style={{ cursor: 'pointer', marginBottom: '5px' }}
            onClick={() => setCoordinates([+item.lat, +item.lon])}
          >
            📍 {item.display_name}
          </div>
        ))}
      </div>
    </div>
  );
});

export default SearchBox;

