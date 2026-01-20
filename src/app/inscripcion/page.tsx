"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function EnrollmentPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-400 to-amber-200 text-transparent bg-clip-text">
          Formulario de Admisión
        </h2>

        {status === "success" ? (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              ¡Resonancia Recibida!
            </h3>
            <p className="text-gray-300">
              Un mentor se pondrá en contacto contigo en breve.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre Completo"
                required
                className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-amber-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-amber-500 transition-all"
              />
            </div>
            <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-amber-500 transition-all appearance-none">
              <option className="bg-black">Instrumento de interés</option>
              <option className="bg-black">Guitarra</option>
              <option className="bg-black">Piano</option>
              <option className="bg-black">Canto</option>
            </select>
            <textarea
              placeholder="Cuéntanos tu experiencia previa..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-amber-500 transition-all"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-amber-500 text-black font-bold py-4 rounded-xl hover:bg-amber-400 transition-colors disabled:opacity-50"
            >
              {status === "loading"
                ? "Procesando Frecuencia..."
                : "Confirmar Inscripción"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
