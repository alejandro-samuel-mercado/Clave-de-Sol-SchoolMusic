"use client";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="fixed bottom-10 right-10 z-[100] flex items-center gap-4 bg-black/80 backdrop-blur-xl border border-white/10 p-3 rounded-full shadow-2xl"
    >
      <audio ref={audioRef} src="/assets/demo-track.mp3" loop />

      {isPlaying && (
        <div className="flex gap-1 px-3">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [10, 25, 10] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
              className="w-1 bg-amber-400 rounded-full"
            />
          ))}
        </div>
      )}

      <button
        onClick={togglePlay}
        className="bg-amber-500 p-3 rounded-full text-black hover:scale-110 transition-transform"
      >
        {isPlaying ? (
          <Pause size={20} fill="black" />
        ) : (
          <Play size={20} fill="black" />
        )}
      </button>

      <div className="pr-4 hidden md:block">
        <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">
          Ahora escuchando
        </p>
        <p className="text-xs font-medium">Starlight Symphony - Alumnos 2025</p>
      </div>
    </motion.div>
  );
}
