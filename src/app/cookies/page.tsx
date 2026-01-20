import LegalLayout from "@/components/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies">
      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          ¿Qué son nuestras Cookies?
        </h2>
        <p>
          En Clave de Sol, utilizamos "cookies" y tecnologías de rastreo
          similares para personalizar tu experiencia auditiva y visual. Son
          pequeños fragmentos de datos que nos permiten recordar tus
          preferencias de instrumentos y niveles de volumen en nuestro
          reproductor flotante.
        </p>
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          Tipos de Cookies en uso
        </h2>
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl border-white/5">
            <h3 className="text-primary font-bold mb-2">
              Cookies de Sesión (Vitales)
            </h3>
            <p className="text-sm">
              Necesarias para mantenerte logueado en tus cursos online y
              proteger tus demos guardadas.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/5">
            <h3 className="text-primary font-bold mb-2">
              Cookies de Frecuencia (Analíticas)
            </h3>
            <p className="text-sm">
              Nos ayudan a entender qué clases son las más populares para
              optimizar nuestros horarios y servidores.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border-white/5">
            <h3 className="text-primary font-bold mb-2">
              Cookies de Personalización
            </h3>
            <p className="text-sm">
              Recuerdan tu progreso en los cursos de teoría y tus ajustes en el
              metrónomo digital.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          Gestión de Datos
        </h2>
        <p>
          Podés desactivar las cookies desde la configuración de tu navegador,
          pero tené en cuenta que ciertas funcionalidades innovadoras, como el
          reproductor interactivo o las audiciones online, podrían dejar de
          funcionar correctamente.
        </p>
      </section>
    </LegalLayout>
  );
}
