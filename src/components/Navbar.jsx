import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Hero', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#services' },
    { name: 'Project', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-purplePrimary/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold tracking-wider text-white">
          PORT<span className="text-purplePrimary">FOLIO</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-purpleGlow transition duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-cardBg border-b border-purplePrimary/20 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-purpleGlow transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}