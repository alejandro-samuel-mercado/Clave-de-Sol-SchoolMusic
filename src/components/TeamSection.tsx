"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Marcelo Gomez",
    image:
      "https://www.diarioinfo.com/sistema/entidades/13-10-2017/cantanteFrias.jpg",
    role: "Guitarra Eléctrica",
    color: "bg-blue-500",
  },
  {
    name: "Sofía Martinez",
    image:
      "https://www.pontevedraviva.com/uploads/s1/36/16/96/2/64c2912694-violencia-zero-marin-3.jpeg",
    role: "Piano & Synth",
    color: "bg-purple-500",
  },
  {
    name: "Juan Perez",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Juan_Quintero.jpg",
    role: "Batería & Percusión",
    color: "bg-amber-500",
  },
];

export default function TeamSection() {
  return (
    <section id="about" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">Mentes Maestras</h2>
            <p className="text-gray-400 text-lg">
              Profesionales con trayectoria internacional listos para guiar tu
              evolución musical.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`aspect-[4/5] rounded-3xl mb-6 overflow-hidden relative object-cover ${member.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              >
                <Image
                  className="object-cover"
                  src={member.image}
                  fill
                  alt={member.name}
                />
              </div>
              <h4 className="text-2xl font-bold">{member.name}</h4>
              <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
