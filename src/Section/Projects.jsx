import React from "react";

const projects = [
  {
    title: "NepBuy E-Commerce",
    description:
      "A responsive e-commerce website built using React. Features product categories, shopping cart, product details, and a modern user interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/kalpana-4321/shopper-frontend",
    live: "#",
  },
   {
    title: "YouTube Clone",
    description:
      "A responsive YouTube clone built using React. Users can browse videos, search for videos, view video details, and explore suggested content using a video API.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
    github: "https://github.com/kalpana-4321/-yt-clone",
    live: "https://yt-clone-lime-one.vercel.app",
   },
  {
    title: "Recipe App",
    description:
      "A recipe application where users can browse recipes, search for meals, and view ingredients with a clean interface.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/kalpana-4321/Recipe",
    live: "https://recipe-alpha-beryl.vercel.app",
  },
{
    title: "Weather App",
    description:
      "A responsive React weather app with real-time weather data, city search, temperature conversion, and dynamic weather backgrounds.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
    github: "https://github.com/kalpana-4321/weather-app",
    live: "https://weather-app-plum-eight-14.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gray-950 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-400 mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};