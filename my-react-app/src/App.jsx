function App() {
  const name = "Alok";
  const role = "Frontend Developer";
  const bio = "I love building clean UI using React.";
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{bio}</p>

      <h3>Skills</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button>Contact Me</button>
    </div>
  );
}

export default App;
