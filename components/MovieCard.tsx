"use client";

import { motion } from "framer-motion";
import { MovieSumary } from "../types";

export default function MovieCard({ movie }: { movie: MovieSumary }, className ?: string) {
  return (
    <motion.div
      className={"relative h-52 min-w-[250px] rounded-2xl shadow-md" + className}
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={movie.Poster}
        alt="Transition Image"
        src={movie.Poster}
        className="absolute h-full w-full rounded-2xl object-cover brightness-75"
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className="mb-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p layoutId={movie.Genre} className="text-xs text-gray-300">
            {movie.Genre}
          </motion.p>
          <motion.h1
            layoutId={movie.Title}
            className="text-xl leading-6 text-white"
          >
            {movie.Title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
