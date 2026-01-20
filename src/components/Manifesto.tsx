"use client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
          <Lightbulb
            size={300}
            className="relative z-10 text-primary mx-auto animate-pulse"
            strokeWidth={0.5}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Tu creatividad no tiene límites
          </h2>
          <h3 className="text-xl text-primary font-medium tracking-widest uppercase">
            Componé el futuro
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            En Clave de Sol, no solo enseñamos a tocar instrumentos, sino a
            sentir la música. Fomentamos la composición y la improvisación desde
            el primer día. Nuestros talleres de ensamble te permitirán tocar con
            otros alumnos y formar tu propia banda en entornos virtuales y
            físicos.
          </p>
          <button className="border-b-2 border-primary text-primary pb-2 font-bold tracking-widest hover:text-white hover:border-white transition">
            DESCUBRÍ TU SONIDO
          </button>
        </motion.div>
      </div>
    </section>
  );
}
