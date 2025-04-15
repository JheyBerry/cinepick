"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdBookmark } from "react-icons/io";
import { MovieInfoProps, textProps } from "../types";

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const AnimatedText = ({ text, className }: textProps) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={` ${className}`} variants={item} key={text}>
        {text}
      </motion.p>
    </span>
  );
};

export default function MovieInfo({
  transitionData,
  currentSlideData,
}: MovieInfoProps) {
  const movieInfo = transitionData ? transitionData : currentSlideData.movie;

  return (
    <div className="items-start">
      <motion.div
        initial="hidden"
        animate={"visible"}
        className="flex flex-col"
      >
        <AnimatedText
          className="spacing overflow-hidden text-[#D5D5D6]"
          text={movieInfo?.Genre}
        />
        <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
        <AnimatedText
          className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]"
          text={movieInfo?.Title}
        />
        <AnimatedText
          className="text-s text-[#D5D5D6]"
          text={movieInfo?.$vectorize}
        />
      </motion.div>
      <motion.div layout className="mt-5 flex items-center gap-3">
        <button
          className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition
            duration-300 ease-in-out hover:opacity-80"
        >
          <IoMdBookmark className="text-xl" />
        </button>
        <button
          className="w-fit rounded-full border-[1px] border-[#ffffff8f] px-6 py-3 text-[10px] font-thin transition duration-300
            ease-in-out hover:bg-white hover:text-black"
        >
          SEE DETAILS
        </button>
      </motion.div>
    </div>
  );
}
