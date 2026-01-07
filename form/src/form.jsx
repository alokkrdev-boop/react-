import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((currData) => ({
      ...currData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This will show exactly like your screenshot
    console.log(formData);

    // Clear form after submit
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <br /><br />

        <label>Username</label>
        <input
          type="text"
          placeholder="enter username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <br /><br />

        <label>Password</label>
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
