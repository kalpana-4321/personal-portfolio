import React from "react";
import { Button } from "../Components/Button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const skills = ["React", "javascript", "tailwindcss"];

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-[#0f1418]"></div>
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-slow-drift"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
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
              Frontend Developer • React.js Specialist
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
              build scalable, high-performance web applications using React.js
              and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                className="gap-2 bg-[#20b2a6] hover:bg-[#1a9389] text-white"
              >
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="/Kaladevi_Rishidev_12.pdf"
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

          {/* Right Column: Image */}
          <div
            className="relative animate-fade-in flex justify-center lg:justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#20b2a6]/30 via-transparent to-[#20b2a6]/10 blur-2xl animate-pulse-glow" />

              <div className="relative glass rounded-4xl p-3 glow-border overflow-hidden">
                <img
                  src="/kaladevi1.png"
                  alt="Kaladevi Rishidev"
                  className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
                />

                {/* Available for Work Badge - Moved further down and right */}
                <div className="absolute -bottom-2 -right-3 glass rounded-xl px-4 py-3 animate-bounce shadow-2xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section - Arranged and cleaned up */}
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
