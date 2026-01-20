import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Términos y Condiciones">
      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          1. Acuerdo de Membresía
        </h2>
        <p>
          Al acceder a la plataforma de Clave de Sol, el usuario acepta
          integrarse a un ecosistema de aprendizaje híbrido. La inscripción a
          cualquiera de nuestros planes (Grupal, Individual o Pro) otorga un
          derecho de uso intransferible sobre nuestros recursos digitales y
          espacios físicos en Buenos Aires.
        </p>
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          2. Propiedad Intelectual Sonora
        </h2>
        <p>
          Toda composición, arreglo o demo grabado dentro de nuestras
          instalaciones o talleres de producción es propiedad intelectual del
          alumno. Clave de Sol se reserva el derecho de utilizar fragmentos de
          estas obras únicamente con fines promocionales de la academia, bajo
          previo consentimiento del artista.
        </p>
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          3. Política de Resonancia (Pagos)
        </h2>
        <p>
          Los ciclos de facturación son mensuales. La falta de pago resultará en
          la suspensión del acceso a las salas de ensayo y plataformas de
          streaming. No se realizan reembolsos por clases no asistidas sin aviso
          previo de 24 horas a través de nuestra plataforma oficial.
        </p>
      </section>

      <section>
        <h2 className="text-white font-bold text-xl mb-4 uppercase tracking-tighter">
          4. Conducta en el Ecosistema
        </h2>
        <p>
          Mantenemos una política de tolerancia cero ante cualquier forma de
          discriminación o acoso. La música es un lenguaje universal de unión;
          cualquier usuario que vulnere este principio será expulsado de la
          comunidad sin derecho a reclamo.
        </p>
      </section>
    </LegalLayout>
  );
}
