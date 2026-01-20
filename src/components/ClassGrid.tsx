"use client";
import { motion } from "framer-motion";
import { Drum, Guitar, Mic2, Music } from "lucide-react";
import Link from "next/link";

const classes = [
  {
    title: "Guitarra",
    icon: <Guitar className="w-8 h-8" />,
    slug: "guitarra",
    color: "from-blue-500",
  },
  {
    title: "Piano",
    icon: <Music className="w-8 h-8" />,
    slug: "piano",
    color: "from-purple-500",
  },
  {
    title: "Canto",
    icon: <Mic2 className="w-8 h-8" />,
    slug: "canto",
    color: "from-pink-500",
  },
  {
    title: "Batería",
    icon: <Drum className="w-8 h-8" />,
    slug: "bateria",
    color: "from-amber-500",
  },
];

export default function ClassGrid() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, idx) => (
            <motion.div
              key={cls.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/clases/${cls.slug}`}
                className="group relative block p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cls.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10">
                  <div className="mb-6 text-amber-400">{cls.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{cls.title}</h3>
                  <p className="text-gray-400 mb-6">
                    Masteriza el instrumento con técnicas híbridas de
                    vanguardia.
                  </p>
                  <span className="text-sm font-bold uppercase tracking-tighter text-amber-400 group-hover:translate-x-2 inline-block transition-transform">
                    Ver Programa +
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
