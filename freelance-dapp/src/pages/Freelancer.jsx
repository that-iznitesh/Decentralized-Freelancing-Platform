function Freelancer() {
  const profile = {
    name: "Nitesh Kumar",
    bio: "Frontend Developer skilled in React & Tailwind",
    skills: ["React", "Tailwind", "JavaScript"],
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold">{profile.name}</h2>

      <p className="mt-2 text-gray-600">{profile.bio}</p>

      <div className="mt-4">
        <h3 className="font-semibold">Skills:</h3>
        <ul className="list-disc ml-5">
          {profile.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Apply for Job
      </button>
    </div>
  );
}

export default Freelancer;