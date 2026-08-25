import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../Components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  {href:"#contact", label:"Contact "},
 
];

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          KB <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-2 py-1.5 flex items-center gap-1 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsMobileOpen(false)}>
              <Button className="w-full">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};