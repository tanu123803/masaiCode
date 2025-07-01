import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";

function Settings() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    setFormData(user);
  }, [user]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUser(formData);
  }

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Settings;