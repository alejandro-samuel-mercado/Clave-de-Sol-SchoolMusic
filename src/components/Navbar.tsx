"use client";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import Link from "next/link";
import { useBooking } from "../context/BookingContext";
export default function Navbar() {
  const { openBooking } = useBooking();
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-20 flex justify-between items-center"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
          <Music className="text-black" size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tighter">CLAVE DE SOL</h1>
      </Link>

      <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
        <Link href="/" className="hover:text-primary transition">
          Inicio
        </Link>
        <Link href="/nosotros" className="hover:text-primary transition">
          Nosotros
        </Link>
        <Link href="/clases" className="hover:text-primary transition">
          Clases
        </Link>
        <Link href="/eventos" className="hover:text-primary transition">
          Eventos
        </Link>
        <Link href="/blog" className="hover:text-primary transition">
          Blog
        </Link>
      </div>

      <button
        className="bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition"
        onClick={() => openBooking("Inscripción General")}
      >
        INSCRIBITE
      </button>
    </motion.nav>
  );
}
