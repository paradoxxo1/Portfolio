import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/blazer.png"
          title="Blazer Quick Grid"
          description="Effortless grid for adding, updating, deleting, filtering, sorting, and pagination data in .NET 8 without the need for external libraries."
        />
        <ProjectCard
          src="/reactform.jpg"
          title="Multistep Form React"
          description="It covers how to create a reusable React hook that can convert any existing set of forms into a multistep form. "
        />
        <ProjectCard
          src="/AddTodo.png"
          title="Todo App"
          description="Designed to help users organize tasks efficiently, editing and prioritization functionalities for seamless task management."
        />
        <ProjectCard
          src="/Alisveris.jpg"
          title="E-commerce"
          description="Efficient e-commerce platform with advanced search, secure checkout, and personalized recommendations for seamless shopping."
        />
      </div>
    </div>
  );
};

export default Projects;
