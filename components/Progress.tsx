"use client";

import { motion } from "framer-motion";
import { ProgressProps } from "../types";

export default function Progress({ curIndex, length }: ProgressProps) {
  const progressLabel = (curIndex + 1).toString().padStart(2, "0");
  const progressLabelLength = (((curIndex + 1) / length) * 100).toString() + "%";

  return (
    <>
      <div className="flex h-[1px] flex-1 items-center rounded-full bg-white bg-opacity-50">
        <div
          className={`h-[1px] rounded-full bg-yellow-400  bg-opacity-50`}
          style={{width: `${progressLabelLength}`}}
        ></div>
      </div>
      <span
        key={curIndex}
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <motion.div
          className="flex items-center text-4xl font-medium"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          key={curIndex}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {progressLabel}
        </motion.div>
      </span>
    </>
  );
}
