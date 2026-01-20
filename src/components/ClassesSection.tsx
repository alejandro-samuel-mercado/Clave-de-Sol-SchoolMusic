"use client";
import { motion } from "framer-motion";
import { Disc, Guitar, Mic2, Music } from "lucide-react";
import Link from "next/link";

const classData = [
  {
    title: "Guitarra",
    icon: <Guitar size={40} />,
    desc: "Acústica y eléctrica con pedalería digital.",
    slug: "guitarra",
  },
  {
    title: "Piano",
    icon: <Music size={40} />,
    desc: "Desde teclados MIDI hasta piano de cola.",
    slug: "piano",
  },
  {
    title: "Canto",
    icon: <Mic2 size={40} />,
    desc: "Técnica vocal y manejo de microfonía pro.",
    slug: "canto",
  },
  {
    title: "Producción",
    icon: <Disc size={40} />,
    desc: "Ableton, Logic y mezcla futurista.",
    slug: "produccion",
  },
];

export default function ClassesSection() {
  return (
    <section id="services" className="py-32 px-6 md:px-20 relative">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Nuestras <span className="text-primary italic">Frecuencias</span>
        </motion.h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Aprendé con los mejores instrumentos y tecnología de vanguardia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {classData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl group hover:border-primary transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 text-primary/5 group-hover:text-primary/20 transition-colors">
              {item.icon}
            </div>
            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              {item.desc}
            </p>
            <Link href={`/clases/${item.slug}`}>
              <button className="w-full py-3 rounded-xl border border-white/10 group-hover:bg-primary group-hover:text-black font-bold transition-all uppercase tracking-tighter">
                Saber Más
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
