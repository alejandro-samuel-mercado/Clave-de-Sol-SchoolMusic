"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Music, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useBooking } from "../context/BookingContext";
export default function Navbar() {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

        {/* Desktop Menu */}
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

        <div className="hidden md:block">
          <button
            className="bg-primary text-black px-6 py-2 rounded-full font-bold hover:scale-105 active:scale-95 transition"
            onClick={() => openBooking("Inscripción General")}
          >
            INSCRIBITE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-10 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center text-2xl font-medium uppercase tracking-widest">
              <Link
                href="/"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/clases"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Clases
              </Link>
              <Link
                href="/eventos"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            <button
              className="bg-primary text-black px-8 py-3 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition"
              onClick={() => {
                setIsOpen(false);
                openBooking("Inscripción General");
              }}
            >
              INSCRIBITE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
