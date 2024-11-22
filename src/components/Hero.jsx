"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen  items-center">
      <Image
        src="/bg.png"
        alt="Padel court"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 sm:py-60">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to World Padel Trips Community
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Join the fastest-growing padel community. Whether you're a beginner or
            a pro, there's a place for you here. Participate in tournaments,
            workshops, and connect with fellow padel enthusiasts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href="#join"
              className="bg-[#032D63] text-white px-8 py-3 rounded-md hover:bg-[#01122A] transition-colors text-lg font-medium"
            >
              Join Our Community
            </Link>
            <Link
              href="#events"
              className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors text-lg font-medium"
            >
              Explore Events
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}