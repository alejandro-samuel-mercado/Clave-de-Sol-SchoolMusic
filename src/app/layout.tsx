import BookingModal from "@/components/BookingModal";
import FloatingMusicPlayer from "@/components/FloatingMusicPlayer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BookingProvider } from "@/context/BookingContext";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Clave de Sol | Escuela de Música Futurista",
  description: "Descubrí el ritmo del futuro en la mejor escuela de música.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} bg-[#050505] text-white antialiased overflow-x-hidden`}
      >
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(253,187,45,0.05),transparent)] pointer-events-none" />
        <BookingProvider>
          <Navbar />
          <main>{children}</main>
          <BookingModal />
          <FloatingMusicPlayer />
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
