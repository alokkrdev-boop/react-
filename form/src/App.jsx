import { useState } from "react";

export default function CommentsForm() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currData) => ({
      ...currData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // This console output will match your screenshot
    console.log(formData);

    // Clear form after submit (optional but good practice)
    setFormData({
      username: "",
      remarks: "",
      rating: ""
    });
  }

  return (
    <div>
      <h3>Give a comment!</h3>

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="@maggie"
          value={formData.username}
          onChange={handleChange}
        />

        <br /><br />

        <label>Remarks</label>
        <br />
        <textarea
          name="remarks"
          placeholder="great job!"
          value={formData.remarks}
          onChange={handleChange}
        ></textarea>

        <br /><br />

        <label>Rating</label>
        <br />
        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
