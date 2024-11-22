"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Trophy, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Vibrant Community",
    description:
      "Connect with passionate padel players from all skill levels and backgrounds.",
    icon: Users,
  },
  {
    name: "Regular Tournaments",
    description:
      "Participate in professionally organized tournaments throughout the year.",
    icon: Trophy,
  },
  {
    name: "Expert Workshops",
    description:
      "Learn from professional coaches and improve your game with our workshops.",
    icon: BookOpen,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function AboutWe() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="/groupPadel.png"
              alt="About Padel"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-[#01122A] sm:text-4xl mb-6"
            >
              About Our Community
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              World Padel Trips is more than just a sports community - it's a family of
              passionate players who share the love for padel. We provide a
              platform for players to connect, compete, and grow together.
            </motion.p>
            <div className="grid grid-cols-1 gap-8 mb-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#032D63] text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#01122A]">{feature.name}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={itemVariants}>
              <Link
                href="#join"
                className="inline-block bg-[#032D63] text-white px-8 py-3 rounded-md hover:bg-[#01122A] transition-colors text-lg font-medium"
              >
                Join Our Community
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
    