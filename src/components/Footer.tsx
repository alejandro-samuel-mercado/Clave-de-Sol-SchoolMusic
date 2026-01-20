import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">CLAVE DE SOL</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Redefiniendo la educación musical con tecnología y pasión desde el
            corazón de Buenos Aires.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Academia</h4>
          <ul className="text-gray-500 space-y-3 text-sm">
            <li>
              <a href="/clases">Cursos Online</a>
            </li>
            <li>
              <a href="/clases">Clases Presenciales</a>
            </li>
            <li>
              <a href="/eventos">Audiciones</a>
            </li>
            <li>
              <a href="/trabaja-con-nosotros">Trabajá con nosotros</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="text-gray-500 space-y-3 text-sm">
            <li>
              <a href="/privacidad">Privacidad</a>
            </li>
            <li>
              <a href="/terminos">Términos</a>
            </li>
            <li>
              <a href="/cookies">Cookies</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Seguinos</h4>
          <div className="flex gap-4">
            <Instagram className="hover:text-primary cursor-pointer transition" />
            <Facebook className="hover:text-primary cursor-pointer transition" />
            <Youtube className="hover:text-primary cursor-pointer transition" />
            <Twitter className="hover:text-primary cursor-pointer transition" />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-[10px] tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} Clave de Sol Digital Studio - Buenos Aires
        . Hecho por Unixxtech
      </div>
    </footer>
  );
}
