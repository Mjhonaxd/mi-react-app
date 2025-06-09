import React from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    category: "Photography",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Branding",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Web Design",
    image: "https://via.placeholder.com/300x180",
  },
];

export default function OurProjectsSubsection() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f0f0f0" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Nuestros Proyectos 🔥</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              background: "#fff",
              width: "300px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget.style.transform = "scale(1.05)");
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget.style.transform = "scale(1)");
              e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", borderRadius: "4px" }}
            />
            <h3 style={{ margin: "0.5rem 0" }}>{project.title}</h3>
            <p style={{ color: "#666" }}>{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
