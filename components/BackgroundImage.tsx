import React from "react";
import { motion } from "framer-motion";
import { MovieInfoProps } from "../types";

export default function BackgroundImage({ transitionData, currentSlideData }: MovieInfoProps) {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.Poster}
          layoutId={transitionData.Poster}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 h-full w-full object-cover brightness-25"
          src={transitionData.Poster}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.movie.Poster + "transition"}
        src={currentSlideData.movie.Poster}
        className="absolute left-0 top-0 h-full w-full object-cover brightness-25"
      />
    </>
  );
}
