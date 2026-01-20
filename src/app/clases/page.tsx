"use client";
import { motion } from "framer-motion";
import { Globe, MapPin, Zap } from "lucide-react";
import Link from "next/link";

export default function ClasesHub() {
  const modes = [
    {
      title: "Online",
      icon: <Globe size={40} />,
      href: "/clases/online",
      desc: "Clases en vivo vía streaming 4K con pizarras digitales sincronizadas.",
      color: "border-blue-500/30",
    },
    {
      title: "Presenciales",
      icon: <MapPin size={40} />,
      href: "/clases/presenciales",
      desc: "En nuestros estudios de Buenos Aires con equipamiento de alta gama.",
      color: "border-amber-500/30",
    },
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-16 text-center tracking-tighter uppercase">
          Elige tu <span className="text-primary italic">Plataforma</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {modes.map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`glass p-12 rounded-[3rem] ${mode.color} hover:bg-white/5 transition-all group cursor-pointer`}
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform">
                {mode.icon}
              </div>
              <h2 className="text-4xl font-bold mb-6 uppercase">
                {mode.title}
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                {mode.desc}
              </p>
              <Link href={mode.href}>
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                  Explorar Modalidad <Zap size={16} fill="black" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
