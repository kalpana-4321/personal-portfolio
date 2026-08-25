import React from "react";
// 1. Updated icons to match Screenshot 1 shapes (Target instead of Lightbulb)
import { FileText, Rocket, Users, Target } from "lucide-react"; // FileText has a similar shape to the one in S1

const highlights = [
  {
    // 2. Used 'FileText' as a closest match to the visual style
    icon: FileText,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    // 3. Switched Lightbulb to Target for Innovation
    icon: Target,
    title: "Innovation",
    description: "Staying ahead of the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    // section: increased padding, added backdrop-blur for whole section
    <section id="about" className="min-h-screen flex items-center py-40 relative overflow-hidden bg-gray-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8 max-w-2xl">
            <div className="animate-fade-in">
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>

            {/* 4. Updated Heading typography to match Screenshot 1 */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Building the future, <br />
              <span className="font-serif italic font-light text-gray-300">
                one component at a time.
              </span>
            </h2>

            {/* 5. Replaced entire text block with the text from Screenshot 1 */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
               Motivated and detail-oriented BSc CSIT graduate with a strong foundation in frontend development using HTML, CSS, JavaScript, React.js, and Tailwind CSS.
              </p>
              <p>
                Completed an internship with hands-on experience in network troubleshooting, Cisco Packet Tracer, IP configuration, and technical support. Passionate about building responsive, user-friendly web applications and solving real-world problems through technology.
              </p>
              <p>
                Eager to contribute to a dynamic development team while continuously learning new technologies and enhancing my skills as a frontend developer.
              </p>
            </div>
            
            {/* 6. Darkened the background of this mission card greatly */}
            <div className="glass rounded-2xl p-6 glow-border bg-gray-900/50 border border-gray-800 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-gray-300">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful—products that users love to use
                and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column: Highlights (Icons section) */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                // 7. MAJOR CHANGE: Darkened background, border, and added stronger blur and hover
                className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-xl hover:bg-gray-800/80 transition-all duration-300"
              >
                {/* 8. Lightened the icon color and slightly increased size */}
                <item.icon className="w-12 h-12 text-cyan-300 mb-6" aria-hidden="true" />
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};