import React from "react";

const experienceData = [
  {
    period: "4 May – 4 July 2026",
    role: "Networking Intern",
    company: "Nepal Rastra Bank",
    description:
      "Completed an internship in the Information Technology Department at Nepal Rastra Bank, where I gained practical exposure to enterprise networking, IP addressing, VLAN configuration, network troubleshooting, server maintenance, RAID implementation, and Cisco Packet Tracer simulations. Assisted senior network engineers in monitoring and maintaining secure network infrastructure while learning industry-standard networking practices.",
    technologies: [
      "Cisco Packet Tracer",
      "TCP/IP",
      "IPv4 Addressing",
      "Subnetting",
      "VLAN",
      "Routing & Switching",
      "PoE",
      "RAID",
      "Network Troubleshooting",
    ],
    certificate: "/NRB intern.png",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-gray-950"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>

          <div className="h-1 w-20 bg-cyan-400 rounded"></div>
        </div>

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                item.current
                  ? "bg-gray-900/60 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                  : "bg-gray-900/40 border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <span className="text-cyan-400 font-medium text-sm tracking-widest uppercase">
                    {item.period}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    {item.role}
                  </h3>

                  <p className="text-gray-400 font-medium text-lg">
                    {item.company}
                  </p>
                </div>

                {item.current && (
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-400/20 self-start">
                    CURRENT
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mt-6 leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-8">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Certificate Button */}
              <div className="mt-8">
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-400 transition-all duration-300"
                >
                  View Internship Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};