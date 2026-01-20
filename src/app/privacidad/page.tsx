import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacidad">
      <section>
        <h2 className="text-white font-bold text-lg mb-2">
          1. Procesamiento de Datos
        </h2>
        <p>
          Toda la información capturada en nuestros formularios de inscripción
          se cifra mediante protocolos de grado militar para proteger la
          identidad sonora de nuestros alumnos.
        </p>
      </section>
      <section>
        <h2 className="text-white font-bold text-lg mb-2">
          2. Uso de Imágenes
        </h2>
        <p>
          El material capturado en las Audiciones y Clases Presenciales podrá
          ser utilizado para contenido de redes sociales previa autorización del
          artista.
        </p>
      </section>
    </LegalLayout>
  );
}
