"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold mb-12"
      >
        Nacimos del <span className="text-primary italic">ritmo.</span>
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">
        <p>
          Fundada en Buenos Aires, Clave de Sol surgió como un refugio para
          artistas que buscaban romper los moldes de la enseñanza tradicional.
          Nuestra misión es empoderar a la próxima generación de músicos con
          herramientas del siglo XXI.
        </p>
        <p>
          Contamos con estudios de grabación profesionales, aulas equipadas con
          estaciones de trabajo de audio digital (DAW) y una comunidad global de
          mentores que han tocado en los escenarios más grandes del mundo.
        </p>
      </div>
      <div className="mt-20 h-96 rounded-3xl overflow-hidden glass relative">
        <div className="absolute inset-0 bg-primary/10 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center text-primary/30 text-8xl font-black italic tracking-tighter uppercase opacity-20">
          <Image
            src="https://musicalexpress.com.pe/wp-content/uploads/2025/04/home-studio.webp"
            alt="Live Concert Showcase"
            fill
          />
        </div>
      </div>
    </div>
  );
}
