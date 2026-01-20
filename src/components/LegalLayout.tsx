export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-44 pb-32 px-6 max-w-3xl mx-auto leading-relaxed text-gray-400">
      <h1 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
        {title}
      </h1>
      <p className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-12">
        Protocolo de Seguridad Clave de Sol v2.6
      </p>
      <div className="space-y-8 text-sm">{children}</div>
    </div>
  );
}
