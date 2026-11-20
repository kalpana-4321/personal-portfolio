import { Button } from "../Components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const skills = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
];

const floatingParticles = [
  { left: "12%", top: "25%", delay: "0.5s", opacity: 0.4 },
  { left: "28%", top: "60%", delay: "1.2s", opacity: 0.6 },
  { left: "45%", top: "15%", delay: "2.1s", opacity: 0.35 },
  { left: "62%", top: "78%", delay: "0.8s", opacity: 0.5 },
  { left: "75%", top: "35%", delay: "3.4s", opacity: 0.45 },
  { left: "88%", top: "55%", delay: "1.9s", opacity: 0.65 },
  { left: "18%", top: "82%", delay: "2.7s", opacity: 0.3 },
  { left: "34%", top: "40%", delay: "4.1s", opacity: 0.55 },
  { left: "53%", top: "90%", delay: "0.2s", opacity: 0.4 },
  { left: "70%", top: "18%", delay: "1.5s", opacity: 0.5 },
  { left: "82%", top: "70%", delay: "3.8s", opacity: 0.35 },
  { left: "08%", top: "45%", delay: "2.3s", opacity: 0.6 },
  { left: "22%", top: "12%", delay: "4.5s", opacity: 0.45 },
  { left: "39%", top: "72%", delay: "1.1s", opacity: 0.5 },
  { left: "58%", top: "30%", delay: "3.0s", opacity: 0.4 },
  { left: "68%", top: "65%", delay: "0.7s", opacity: 0.55 },
  { left: "92%", top: "22%", delay: "2.5s", opacity: 0.35 },
  { left: "85%", top: "88%", delay: "4.2s", opacity: 0.6 },
  { left: "48%", top: "52%", delay: "1.7s", opacity: 0.5 },
  { left: "15%", top: "95%", delay: "3.1s", opacity: 0.4 },
];

export const Hero = () => {
  const icon = [
    { Icon: SiGithub, link: "https://github.com/kalpana-4321" },
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/kalpana-bhandari-154126306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#0f1418]">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/80 to-background"></div>
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-slow-drift"
            style={{
              backgroundColor: "#20b2a6",
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-sm text-[#20b2a6]">
              <span className="w-2 h-2 bg-[#20b2a6] rounded-full animate-pulse" />
              Full-Stack Frontend Developer • React & Next.js Specialist
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Crafting <span className="text-[#20b2a6] glow-text">digital</span>
              <br />
              Experiences with
              <br />
              <span className="italic font-light text-white opacity-90">
                precision.
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg">
              Hi, I'm <span className="text-white">Kaladevi Rishidev</span>. I
              build scalable, high-performance web applications using React.js,
              Next.js 16, TypeScript, serverless databases, and AI agent integrations.
            </p>

            <div className="flex flex-wrap gap-6">
              <a href="#contact">
                <Button
                  size="lg"
                  className="gap-2 bg-[#20b2a6] hover:bg-[#1a9389] text-white"
                >
                  Contact me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="/Kaladevi Rishidev - Frontend Developer Resume.pdf"
                download
                className="relative group px-8 py-4 flex items-center gap-2 text-white font-medium"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 60"
                  preserveAspectRatio="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="196"
                    height="56"
                    rx="28"
                    fill="none"
                    stroke="#20b2a6"
                    strokeWidth="2"
                    strokeDasharray="100 300"
                    strokeDashoffset="400"
                    className="animated-border-path transition-all duration-700 group-hover:stroke-white"
                  />
                </svg>

                <Download className="w-5 h-5 text-[#20b2a6]" />
                <span>Download CV</span>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-gray-500">Follow me:</span>
              {icon.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:text-[#20b2a6] transition-colors text-white"
                >
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Circular Image */}
          <div
            className="relative animate-fade-in flex justify-center lg:justify-end pb-8 lg:pb-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#20b2a6]/40 via-transparent to-[#20b2a6]/20 blur-3xl animate-pulse-glow" />

              {/* Circular Container with Glass Border */}
              <div className="relative w-full h-full rounded-full glass p-3 glow-border overflow-hidden flex items-center justify-center">
                <img
                  src="/kaladevi1.png"
                  alt="Kaladevi Rishidev"
                  className="w-full h-full object-cover rounded-full object-[center_20%]"
                />
              </div>

              {/* Available for Work Badge - Centered at the bottom edge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-5 py-2.5 animate-bounce shadow-2xl z-20 whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="text-xs sm:text-sm font-medium text-white">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 py-12 w-full bg-gradient-to-t from-black/20 to-transparent">
        <p className="text-center text-gray-500 text-xs mb-6 uppercase tracking-[0.3em]">
          Technologies I work with
        </p>
        <div className="flex justify-center overflow-hidden w-full">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...skills].map((skill, idx) => (
              <div
                key={idx}
                className="px-8 py-3 glass rounded-full text-[#20b2a6] font-medium border-[#20b2a6]/20 shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pb-8 animate-fade-in">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#20b2a6] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest">scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};