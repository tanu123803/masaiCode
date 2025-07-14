import React from "react";
import { useForm } from "./hooks/useForm";
import FormComponent from "./components/FormComponent";

function FormComponent() {
  const [form, handleChange, resetForm] = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${form.name}, Email: ${form.email}`);
    resetForm();
  };

  return (
    <div>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <br />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;