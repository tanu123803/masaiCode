import React from 'react';
import LogForm from '../components/LogForm';
import Insights from '../components/Insights';
import ExportPDF from '../components/ExportPDF';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">MindTrack Dashboard</h1>
      <LogForm />
      <Insights />
      <ExportPDF />
    </div>
  );
};

export default Dashboard;