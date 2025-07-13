import React from 'react';
import jsPDF from 'jspdf';

const ExportPDF = () => {
  const handleExport = () => {
    const doc = new jsPDF();
    doc.text("MindTrack Journal Export", 10, 10);
    doc.text("This is a placeholder PDF. You can add logs here.", 10, 20);
    doc.save("MindTrack_Journal.pdf");
  };

  return (
    <div>
      <button onClick={handleExport} className="bg-purple-600 text-white px-4 py-2 rounded">
        Download Journal PDF
      </button>
    </div>
  );
};

export default ExportPDF;