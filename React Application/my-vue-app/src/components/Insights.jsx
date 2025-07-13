import React from 'react';

const Insights = () => {
  // In a real app, you'd calculate these based on submitted logs
  const insights = [
    "You focus better after 8+ hours of sleep.",
    "Longer breaks seem to reduce your stress levels."
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Your Insights</h2>
      <ul className="list-disc pl-5">
        {insights.map((insight, idx) => (
          <li key={idx} className="text-gray-700">{insight}</li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;