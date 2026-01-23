"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    title: "El futuro de la IA en la composición",
    image:
      "https://api.junia.ai/storage/v1/object/sign/user-generated-images/18d32214-afe4-4bec-8652-8e6d1b062e19/8408a331-7822-4fc4-b720-02a9f819244e.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLWdlbmVyYXRlZC1pbWFnZXMvMThkMzIyMTQtYWZlNC00YmVjLTg2NTItOGU2ZDFiMDYyZTE5Lzg0MDhhMzMxLTc4MjItNGZjNC1iNzIwLTAyYTlmODE5MjQ0ZS5wbmciLCJpYXQiOjE3MDA4ODEyNDYsImV4cCI6MTg1ODU2MTI0Nn0.GmCPbOVkLeG31WdgLXNrDSr1aPoh1zpaP4SX5dUC_Ro",
    link: "https://canal.ugr.es/noticia/la-inteligencia-artificial-aplicada-al-audio-y-la-creacion-musical-por-mike-platinas-tony-postigo-y-jose-antonio-silva-djhoward/",
    tag: "Tech",
    date: "2 días atrás",
  },
  {
    title: "5 tips para mejorar tu vibrato",
    image:
      "https://i.ytimg.com/vi/Vtf7DwPewBw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBs_-gzgYl6QZZS1x2wD4QSlzZarg",
    link: "https://estudioslabanana.com/como-montar-home-studio/",
    tag: "Vocal",
    date: "1 semana atrás",
  },
  {
    title: "Setup ideal para Home Studio 2026",
    image:
      "https://estudioslabanana.com/wp-content/uploads/2025/05/techivation-6Y2uBqgVKDA-unsplash-1-2-1024x683-1.jpg",
    link: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Festudioslabanana.com%2Fcomo-montar-home-studio%2F&opi=89978449",
    tag: "Producción",
    date: "1 mes atrás",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl max-md:text-[3rem] font-bold mb-20">
          Exploraciones <span className="text-primary italic">Sonoras.</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col gap-6"
            >
              <div
                className="aspect-video glass rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group"
                onClick={() => window.open(post.link, "_blank")}
              >
                <Image src={post.image} fill alt={post.title} />
              </div>
              <div className="px-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  {post.tag}
                </span>
                <h2 className="text-2xl font-bold mt-2 hover:text-primary transition cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mt-4 uppercase tracking-tighter">
                  {post.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
