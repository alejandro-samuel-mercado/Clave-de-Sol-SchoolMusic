"use client";
import { useBooking } from "@/context/BookingContext";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Send, X } from "lucide-react";
import { useState } from "react";

export default function BookingModal() {
  const { isOpen, closeBooking, selectedPlan } = useBooking();
  const [step, setStep] = useState<"form" | "success">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    setTimeout(() => {
      closeBooking();
      setStep("form");
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass p-8 md:p-12 rounded-[3rem] border-primary/20 shadow-[0_0_50px_rgba(253,187,45,0.1)]"
          >
            <button
              onClick={closeBooking}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition"
            >
              <X size={24} />
            </button>

            {step === "form" ? (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold uppercase tracking-tighter">
                    Iniciando{" "}
                    <span className="text-primary italic">Frecuencia</span>
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Plan seleccionado:{" "}
                    <span className="text-white font-bold">{selectedPlan}</span>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Nombre Artístico / Real"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Canal de Contacto (Email)"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary outline-none transition-all"
                  />
                  <div className="pt-4">
                    <button className="w-full bg-primary text-black font-black py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(253,187,45,0.4)] flex items-center justify-center gap-2 group">
                      CONFIRMAR RESONANCIA{" "}
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle
                    size={40}
                    className="text-primary animate-bounce"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase">
                  ¡Conexión Exitosa!
                </h3>
                <p className="text-gray-400">
                  Tu lugar en la escuela del futuro ha sido pre-reservado.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
