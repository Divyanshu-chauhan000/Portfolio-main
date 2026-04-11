import React, { useState } from "react";

const CreateProject = () => {
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    techStack: [],
    GithubUrl: "",
    Live: "",
  });

  const [techInput, setTechInput] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addTech = () => {
    if (techInput.trim() !== "") {
      setForm({
        ...form,
        techStack: [...form.techStack, techInput],
      });
      setTechInput("");
    }
  };

  const removeTech = (index) => {
    const updated = form.techStack.filter((_, i) => i !== index);
    setForm({ ...form, techStack: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-[#0b1d2a] flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#112d3c] p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
          Create Project 🚀
        </h2>

        {/* Image */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#0b1d2a] text-white border border-cyan-500 focus:outline-none"
        />

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#0b1d2a] text-white border border-cyan-500"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#0b1d2a] text-white border border-cyan-500"
        />

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Add Tech (React, Node...)"
              className="flex-1 p-3 rounded-lg bg-[#0b1d2a] text-white border border-cyan-500"
            />
            <button
              type="button"
              onClick={addTech}
              className="bg-cyan-500 px-4 rounded-lg text-black font-semibold"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {form.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-cyan-600 px-3 py-1 rounded-full text-sm text-white flex items-center gap-2"
              >
                {tech}
                <button onClick={() => removeTech(index)}>✕</button>
              </span>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <input
          type="text"
          name="GithubUrl"
          placeholder="GitHub URL"
          value={form.GithubUrl}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-lg bg-[#0b1d2a] text-white border border-cyan-500"
        />

        {/* Live */}
        <input
          type="text"
          name="Live"
          placeholder="Live Project URL"
          value={form.Live}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded-lg bg-[#0b1d2a] text-white border border-cyan-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black py-3 rounded-lg font-bold transition"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;