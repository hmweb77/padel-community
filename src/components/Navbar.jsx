"use client";
import { Icon } from 'lucide-react';
import { tennisRacket } from '@lucide/lab';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Join Us", href: "#join" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
            <Icon iconNode={tennisRacket} className="h-8 w-8 text-[#032D63]"  />
              <span className="font-bold text-xl text-[#01122A]">World Padel Trips</span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#01122A] hover:text-[#032D63] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-[#032D63] text-white px-4 py-2 rounded-md hover:bg-[#01122A] transition-colors">
                Sign In
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="text-[#01122A] p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#01122A] hover:text-[#032D63] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-[#032D63] text-white px-4 py-2 rounded-md hover:bg-[#01122A] transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;