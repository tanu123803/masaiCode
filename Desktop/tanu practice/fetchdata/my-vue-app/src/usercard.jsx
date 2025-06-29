import React from 'react';

function UserCard({ name, email, city }) {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    width: '250px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'left'
  };

  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
}

export default UserCard;
