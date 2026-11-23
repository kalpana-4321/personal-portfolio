import React from "react";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Visa Appointment & Application Portal",
    tagline: "Visa Booking System",
    category: "Next.Js",
    description:
      "A comprehensive visa application and appointment booking portal supporting global destinations. Features online document upload with AWS S3, real-time application status tracking, secure applicant authentication, appointment scheduling, and Neon Serverless PostgreSQL persistence.",
    keyFeatures: [
      "Multi-destination appointment scheduling (Schengen, US, UK, UAE, Japan, Australia)",
      "Secure cloud document upload & storage powered by AWS S3 (@aws-sdk/client-s3)",
      "Serverless Neon PostgreSQL database with Next.js 16 App Router API routes",
      "Real-time application status tracking and dedicated user dashboard",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Neon PostgreSQL",
      "AWS S3",
      "Lucide React",
    ],
    github: "https://github.com/kalpana-4321/visa-appoinment",
    live: "https://visa-appoinment.vercel.app/",
  },
  {
    title: "Expense & Financial Tracker",
    tagline: "Full-Stack Next.js 16 • AI Financial Agent • Khalti Payments",
    category: "Next.js",
    featured: false,
    description:
      "A personal finance and wallet management platform with real-time analytics, category budgeting, and wallet-linked savings goals. Features an intelligent Financial AI Agent powered by Google Gemini and secure Khalti payment gateway checkout and verification.",
    keyFeatures: [
      "AI Financial Assistant powered by Google Gemini API (@google/genai)",
      "Khalti Payment Gateway integration (checkout initiation & status lookup)",
      "Serverless Neon PostgreSQL database with Zod schema validation",
      "Interactive analytics, savings goals, and transaction filtering",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Neon PostgreSQL",
      "Google Gemini AI",
      "Khalti API",
      "Zod",
    ],
    github: "https://github.com/kalpana-4321/Expense-tracer",
    live: "https://expense-tracer-delta.vercel.app/",
  },
  {
    title: "NepBuy E-Commerce",
    tagline: "Modern Online Shopping Platform",
    category: "React Apps",
    featured: false,
    description:
      "A responsive e-commerce web application featuring categorized product discovery, interactive shopping cart management, item details, and an optimized responsive UI.",
    keyFeatures: [
      "Dynamic product catalog with filtering and search",
      "Global shopping cart state management",
      "Modern mobile-first responsive layout",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Context API"],
    github: "https://github.com/kalpana-4321/shopper-frontend",
    live: null,
  },
  {
    title: "YouTube Clone",
    tagline: "Video Streaming & Discovery Interface",
    category: "React Apps",
    featured: false,
    description:
      "A responsive YouTube clone built using React and RapidAPI. Users can stream videos, search across YouTube's database, browse channel details, and explore related video recommendations.",
    keyFeatures: [
      "Video streaming with RapidAPI YouTube v3 feed",
      "Instant keyword search and category browsing",
      "Custom video player with suggested videos feed",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "RapidAPI"],
    github: "https://github.com/kalpana-4321/-yt-clone",
    live: "https://yt-clone-lime-one.vercel.app",
  },
  {
    title: "Weather Forecast App",
    tagline: "Real-Time Atmospheric Conditions",
    category: "React Apps",
    featured: false,
    description:
      "A sleek weather web application providing real-time forecasts, multi-city search, temperature unit switching, atmospheric pressure, humidity indicators, and dynamic weather-driven visual themes.",
    keyFeatures: [
      "Real-time OpenWeather API integration with auto-complete city search",
      "Dynamic UI background reacting to live meteorological conditions",
      "Celsius and Fahrenheit unit conversion with 5-day outlook",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "OpenWeather API"],
    github: "https://github.com/kalpana-4321/weather-app",
    live: "https://weather-app-plum-eight-14.vercel.app",
  },
  {
    title: "Recipe Discovery App",
    tagline: "Interactive Culinary Explorer",
    category: "React Apps",
    featured: false,
    description:
      "A culinary web app for browsing diverse recipes, searching meals by primary ingredients, and viewing step-by-step cooking instructions with YouTube video walkthroughs.",
    keyFeatures: [
      "Browse recipes by category, cuisine region, and ingredients",
      "Detailed step-by-step measurements and preparation instructions",
      "Clean, distraction-free cooking interface",
    ],
    technologies: ["React", "JavaScript", "CSS3", "TheMealDB API"],
    github: "https://github.com/kalpana-4321/Recipe",
    live: "https://recipe-alpha-beryl.vercel.app",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#0a0e12] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#20b2a6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#20b2a6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass text-xs text-[#20b2a6] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-[#20b2a6] glow-text">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-[#20b2a6] mt-4 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                project.featured
                  ? "bg-linear-to-b from-[#141d24] to-[#0f151a] border border-[#20b2a6]/40 shadow-xl shadow-[#20b2a6]/5 hover:border-[#20b2a6] hover:shadow-[#20b2a6]/15 hover:-translate-y-1"
                  : "bg-[#11171d]/90 border border-[#242e38] hover:border-[#20b2a6]/50 hover:bg-[#141b22] hover:-translate-y-1"
              }`}
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2">
                    {/* <div className="p-2 rounded-lg bg-[#20b2a6]/10 text-[#20b2a6]">
                      <FolderGit2 className="w-5 h-5" />
                    </div> */}
                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#20b2a6]/15 text-[#20b2a6] border border-[#20b2a6]/30">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white group-hover:text-[#20b2a6] transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#20b2a6]/90 mb-3 font-mono">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Feature bullets if available */}
                {project.keyFeatures && (
                  <ul className="mb-6 space-y-1.5 text-xs text-gray-400 border-l-2 border-[#20b2a6]/30 pl-3">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="leading-snug">
                        • {feat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1b252e] text-[#20b2a6] border border-[#20b2a6]/20 px-2.5 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1e2832]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#182028] hover:bg-[#20b2a6] hover:text-background text-gray-200 text-xs font-semibold transition-all duration-200"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      GitHub Repo
                    </a>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#20b2a6]/15 hover:bg-[#20b2a6] text-[#20b2a6] hover:text-background text-xs font-semibold border border-[#20b2a6]/30 transition-all duration-200"
                    >
                      Live Demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-gray-500 italic pl-1">
                      Local / Enterprise
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
