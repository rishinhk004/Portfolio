"use client";
import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Incandescence 2025 Official Website",
      description:
        "Developed a scalable game feature with photo uploads, letter collection and robust backend handling over 1.3M+ API requests.",
      image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757099778/incand_ufg4p3.png",
      imageAlt: "Screenshot of portfolio website homepage with dark theme",
      techStack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Express.js",
        "MongoDB",
        "Prisma",
        "Node.js",
        "Amazon S3",
        "Amazon EC2",
        "Git",
      ],
      link: "https://incand.in",
      github: "https://github.com/gdsc-nits-org/incand-api-2025",
      featured: false,
    },
    {
      id: 4,
      name: "Tecnoesis 2024 Official Website",
      description:
        "Tech fest site built for high traffic. Developed complex GSAP animations, integrated multiple APIs and handled 1M+ backend requests for a seamless user experience.",
      image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757099731/tecnoesis_iqrlen.png",
      imageAlt: "AI chat application interface showing conversation",
      techStack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "GSAP",
        "Framer Motion",
        "Express.js",
        "MongoDB",
        "Prisma",
        "Node.js",
        "Git",
        "AWS S3",
        "AWS EC2"
      ],
      link: "https://tecnoesis-2024.pages.dev/",
      github: "https://github.com/gdsc-nits-org/tecnoesis-2024",
      featured: false,
    },
    {
      id: 5,
      name: "Mood of NITS",
      description:
        "A platform for campus exit polls and election content sharing. Enables all users to participate in polls and contribute election-related posts.",
      image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757099820/mood_xjnmsa.png",
      imageAlt: "Mood of NITS Homepage",
      techStack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Express.js",
        "MongoDB",
        "Prisma",
        "Node.js",
        "Firebase",
        "Git",
        "AWS S3",
        "AWS EC2"
      ],
      link: "https://www.moodofnits.site/",
      github: "https://github.com/barnilsarma/moodofnits-2.0",
      featured: false,
    },
     {
      id: 6,
      name: "Oikyotaan 2025 Website",
      description:
        "The official website for Oikyotaan 2025, the spring fest of NIT Silchar. Features event details, gallery page, and team information.",
      image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757100022/44f1bdd9-3603-4d1b-85ef-25784c8787f0.png",
      imageAlt: "Oikyotaan Homepage",
      techStack: [
        "Next.js",
        "TailwindCSS",
        "Typescript",
        "Framer Motion",
        "Gsap",
        "Git"
      ],    
      link: "https://www.oikyotaan.in/",
      github: "https://github.com/gdsc-nits-org/Oikyotaan25",
      featured: false,
    }, {
      id: 7,
      name: "Idea Hub",
      description:
        "A platform for students to share and discuss innovative project ideas. Features idea submission, commenting, and upvoting functionalities. A key resource for fostering creativity and collaboration among students.",
      image: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1757107349/e433c6cc-2351-4c20-b858-cff9a6ec8ff7.png",
      imageAlt: "Idea Hub Homepage",
      techStack: [
        "React.js",
        "Scss",
        "Javascript",
        "Express.js",
        "MongoDB",
        "Prisma",
        "Socket.io",
        "Node.js",
        "Git",
      ],
      link: "https://ideahub.gdscnits.in/",
      featured: false,
      github: "https://github.com/gdsc-nits-org/idea-portal-backend"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <>
      <section className="w-full flex flex-col justify-start px-1 mb-6">
        <h2 className="text-xl sm:text-2xl font-medium">Projects ~</h2>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border border-stone-800/90 rounded-lg overflow-hidden flex flex-col bg-stone-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/50 ${
              project.featured ? "ring-1 ring-stone-600/50" : ""
            }`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative w-full h-40 cursor-pointer overflow-hidden">
              <div className="absolute top-0 right-0 z-10 m-2">
                {project.featured && (
                  <span className="px-2 py-0.5 bg-stone-800/80 text-xs rounded-md text-amber-400 border border-amber-500/30">
                    Featured
                  </span>
                )}
              </div>
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform:
                    hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-70"></div>
            </div>

            <div className="p-4 flex flex-col gap-2 flex-grow">
              <h3 className="text-lg font-semibold text-zinc-100">
                {project.name}
              </h3>
              <p className="text-xs text-zinc-300 line-clamp-2">
                {project.description}
              </p>

              <div className="mt-2">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py-0.5 bg-stone-800/70 text-xs rounded-md text-zinc-300 border border-stone-700/50"
                    >
                      <Code size={10} className="text-zinc-400" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-auto pt-2 border-t border-stone-800/50">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-700/80 text-xs font-medium text-zinc-100 relative no-underline duration-300 ease-in hover:bg-stone-600/60 border border-stone-600/30 mt-2"
                  >
                    <ExternalLink size={12} />
                    View Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-transparent text-xs font-medium text-zinc-300 relative no-underline duration-300 ease-in hover:bg-stone-800/80 border border-stone-700/30 mt-2"
                  >
                    <Github size={12} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
