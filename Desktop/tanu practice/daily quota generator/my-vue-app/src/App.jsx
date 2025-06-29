import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Daily Quote Viewer</h1>

      {quote ? (
        <div>
          <p style={{ fontSize: "24px", fontStyle: "italic" }}>"{quote.content}"</p>
          <p style={{ fontWeight: "bold" }}>— {quote.author}</p>
        </div>
      ) : (
        <p>Loading quote...</p>
      )}

      <button onClick={fetchQuote} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Get New Quote
      </button>
    </div>
  );
}

export default App;