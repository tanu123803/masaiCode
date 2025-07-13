import React, { useState } from 'react';

const LogForm = () => {
  const [form, setForm] = useState({
    studyHours: '',
    breakTime: '',
    sleepHours: '',
    stressLevel: 1,
    focusLevel: 1,
    reflection: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    alert("Log submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input name="studyHours" value={form.studyHours} onChange={handleChange} placeholder="Study Hours" className="border p-2 mb-2 w-full" />
      <input name="breakTime" value={form.breakTime} onChange={handleChange} placeholder="Break Time (mins)" className="border p-2 mb-2 w-full" />
      <input name="sleepHours" value={form.sleepHours} onChange={handleChange} placeholder="Sleep Hours" className="border p-2 mb-2 w-full" />
      <input name="stressLevel" value={form.stressLevel} onChange={handleChange} placeholder="Stress Level (1-5)" className="border p-2 mb-2 w-full" />
      <input name="focusLevel" value={form.focusLevel} onChange={handleChange} placeholder="Focus Level (1-5)" className="border p-2 mb-2 w-full" />
      <textarea name="reflection" value={form.reflection} onChange={handleChange} placeholder="Reflection (Markdown supported)" className="border p-2 mb-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Submit Log</button>
    </form>
  );
};

export default LogForm;