"use client";
import { useBooking } from "@/context/BookingContext";
import { motion } from "framer-motion";
import { PlayCircle, Star, Users } from "lucide-react";
import { useParams } from "next/navigation";
export default function CourseDetail() {
  const { openBooking } = useBooking();
  const { slug } = useParams();

  return (
    <div className="min-h-screen pt-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div className="space-y-8">
            <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Nivel: Iniciación a Pro
            </span>
            <h1 className="text-7xl font-bold uppercase tracking-tighter capitalize">
              {slug}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Dominá el arte de {slug} con nuestro método exclusivo de inmersión
              total. Aprendé técnica, teoría aplicada y performance escénica.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Users className="text-primary" />
                <span className="text-sm font-bold">500+ Alumnos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-primary" />
                <span className="text-sm font-bold">4.9 Rating</span>
              </div>
            </div>
            <button
              className="w-full md:w-max bg-primary text-black px-12 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(253,187,45,0.5)] transition"
              onClick={() => openBooking(`Clase de ${slug}`)}
            >
              Reservar Clase Demo Gratis
            </button>
          </div>

          <div className="relative group">
            <div className="aspect-video glass rounded-3xl overflow-hidden flex items-center justify-center">
              <PlayCircle
                size={80}
                className="text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition cursor-pointer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-black p-6 rounded-2xl font-bold text-center">
              <p className="text-3xl">20%</p>
              <p className="text-[10px] uppercase">Off Lanzamiento</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
