"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://i0.wp.com/musically.com/wp-content/uploads/2025/10/Osho-Jain-at-the-Spotify-Radar-Live-showcase.jpg?fit=600%2C400&ssl=1",
    alt: "Live Concert Showcase",
    className: "col-span-2 row-span-2 h-[400px] md:h-[620px]",
    label: "Live Showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    alt: "Recording Studio",
    className: "h-[200px] md:h-[300px]",
    label: "Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    alt: "Music Theory",
    className: "h-[200px] md:h-[300px]",
    label: "Theory",
  },
  {
    src: "https://www.kaufmanmusiccenter.org/images/uploads/showcase/_small/Piano_Lesson_-_1920x960.jpg",
    alt: "Piano Practice",
    className: "h-[200px] md:h-[300px]",
    label: "Piano",
  },
  {
    src: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop",
    alt: "Guitar Performance",
    className: "h-[200px] md:h-[300px]",
    label: "Guitar",
  },
];

export default function GallerySection() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tighter"
          >
            Nuestra <span className="text-primary italic">Vibra.</span>
          </motion.h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs">
            Capturas de la evolución sonora
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative group rounded-[2.5rem] overflow-hidden glass border-white/10 ${img.className}`}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute bottom-8 left-8 z-20 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-2">
                  Internal Files
                </p>
                <h4 className="text-xl font-bold">{img.label}</h4>
              </div>

              <div className="absolute top-6 right-6 z-20">
                <div className="size-10 rounded-full glass border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
