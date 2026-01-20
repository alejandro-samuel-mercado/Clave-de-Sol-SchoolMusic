"use client";
import { Briefcase } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-8 uppercase italic">
          Buscamos <span className="text-primary">Visionarios</span>
        </h1>
        <p className="text-gray-400 text-lg mb-16">
          Unite al equipo de instructores y tecnólogos que están cambiando la
          música en Latinoamérica.
        </p>

        <div className="glass p-10 rounded-[3rem] border-dashed border-white/20">
          <Briefcase className="mx-auto text-primary mb-6" size={48} />
          <h3 className="text-2xl font-bold mb-4">
            ¿Sos profesor o productor?
          </h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Siempre estamos en busca de talento excepcional para nuestras áreas
            de Canto, Instrumentos Modernos y Producción Audiovisual.
          </p>
          <a href="mailto:alesamu.am@gmail.com">
            <button className="bg-primary text-black px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs">
              Enviar Portfolio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
