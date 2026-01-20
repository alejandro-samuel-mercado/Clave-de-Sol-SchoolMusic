"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Music2, ZapOff, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              filter: [
                "hue-rotate(0deg)",
                "hue-rotate(90deg)",
                "hue-rotate(0deg)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="p-6 rounded-full glass border-primary/30"
          >
            <ZapOff size={64} className="text-primary" />
          </motion.div>
        </div>

        <h1 className="relative text-[120px] md:text-[180px] font-black leading-none tracking-tighter italic text-white/5 select-none">
          404
          <motion.span
            animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 0.1 }}
            className="absolute inset-0 text-primary/20 flex items-center justify-center"
          >
            404
          </motion.span>
        </h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-[-40px]"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Frecuencia <span className="text-primary">Perdida</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-12 text-lg font-light">
            El canal que intentas sintonizar ha sido desplazado fuera del rango
            armónico. El silencio aquí es absoluto.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(253,187,45,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-10 py-4 rounded-full font-black flex items-center gap-3 transition-all"
              >
                <Home size={20} />
                REGRESAR A LA SINFONÍA
              </motion.button>
            </Link>

            <Link href="/clases">
              <motion.button
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-10 py-4 rounded-full border border-white/10 font-bold flex items-center gap-3 transition-all text-sm uppercase tracking-widest"
              >
                <Music2 size={18} />
                Explorar Clases
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 w-full px-10 flex justify-between items-end">
        <div className="flex gap-1 h-12 items-end">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [4, 10, 4] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
              className="w-1 bg-white/10 rounded-full"
            />
          ))}
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] ml-4 mb-1">
            Señal Crítica
          </p>
        </div>

        <p className="text-[10px] text-white/10 uppercase tracking-[0.2em] hidden md:block">
          Error_Code: 0x82_SILENCE_DETECTOR
        </p>
      </div>
    </div>
  );
}
