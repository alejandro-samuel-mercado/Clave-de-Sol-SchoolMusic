"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
      >
        <source src="/assets/hero-music-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-amber-400 mb-4 font-montserrat">
            Establecida en Buenos Aires
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-500">
            CLAVE DE SOL
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Fusionamos la disciplina clásica con la tecnología del mañana. Tu
            viaje musical comienza en el futuro.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/clases">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(253,187,45,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-black px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Explorar Clases
              </motion.button>
            </Link>
            <Link href="/inscripcion">
              <motion.button
                whileHover={{ scale: 1.05, border: "1px solid #fdbb2d" }}
                className="border border-white/20 backdrop-blur-md px-10 py-4 rounded-full font-bold text-lg"
              >
                Inscribirme Ahora
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <p className="text-xs tracking-widest uppercase">Scroll para vibrar</p>
      </motion.div>
    </section>
  );
}
