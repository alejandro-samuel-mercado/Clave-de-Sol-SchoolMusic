"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useBooking } from "../context/BookingContext";

const plans = [
  {
    name: "Grupal",
    price: "15k",
    features: [
      "Clases de 1 hora",
      "Hasta 4 alumnos",
      "Teoría musical",
      "Instrumento incluido",
    ],
  },
  {
    name: "Individual",
    price: "25k",
    features: [
      "100% Personalizado",
      "Repertorio a elección",
      "Acceso a salas",
      "Grabación de demos",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "35k",
    features: [
      "Taller de Ensamble",
      "Grabación Pro",
      "Coaching vocal",
      "Masterclass Mensual",
    ],
  },
];

export default function PricingSection() {
  const { openBooking } = useBooking();
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Planes de <span className="text-primary italic">Inversión</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs">
            Sin matrícula / Acceso 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`p-10 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 ${plan.featured ? "glass border-primary neo-shadow bg-primary/5 py-16" : "bg-white/5 border border-white/10"}`}
            >
              <h5 className="text-xl font-bold mb-2 uppercase tracking-tighter">
                {plan.name}
              </h5>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-primary italic">
                  ${plan.price}
                </span>
                <span className="text-gray-500 text-sm">/ mes</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <CheckCircle2 size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.featured ? "bg-primary text-black hover:scale-105" : "bg-white/10 hover:bg-white/20"}`}
                onClick={() => openBooking(plan.name)}
              >
                ELEGIR PLAN
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
