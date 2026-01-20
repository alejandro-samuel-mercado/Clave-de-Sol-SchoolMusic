"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "Summer Showcase 2026",
    date: "15 FEB",
    type: "Concierto",
    place: "Anfiteatro Digital",
  },
  {
    title: "Audiciones Ensamble Rock",
    date: "22 FEB",
    type: "Audición",
    place: "Estudio A",
  },
  {
    title: "Masterclass Producción",
    date: "05 MAR",
    type: "Workshop",
    place: "Online",
  },
];

export default function EventosPage() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-16 uppercase italic tracking-tighter">
          Eventos & <span className="text-primary">Audiciones</span>
        </h1>
        <div className="space-y-6">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl flex flex-wrap justify-between items-center gap-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-8">
                <div className="text-center bg-white/5 p-4 rounded-2xl min-w-[100px] group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="block text-2xl font-black leading-none">
                    {ev.date.split(" ")[0]}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {ev.date.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">
                    {ev.type}
                  </span>
                  <h3 className="text-2xl font-bold">{ev.title}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                    <Calendar size={14} /> {ev.place}
                  </p>
                </div>
              </div>
              <button className="px-10 py-4 border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
                {ev.type === "Audición" ? "Postularse" : "Obtener Ticket"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
