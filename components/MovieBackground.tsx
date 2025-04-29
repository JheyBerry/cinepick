"use client";
import { motion } from "framer-motion";
import { MovieProps } from "../types";

export default function MovieBackground({ Poster }: MovieProps) {
  return (
    <motion.img
      key={Poster}
      layoutId={Poster}
      alt="Transition Image"
      transition={{
        opacity: { ease: "linear" },
        layout: { duration: 0.6 },
      }}
      className="absolute left-0 top-0 h-full w-full object-cover brightness-25"
      src={Poster}
    />
  );
}
