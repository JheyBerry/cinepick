"use client";

import { motion } from "framer-motion";
import { MovieProps } from "../types";
import AnimatedText from "./AnimatedText";

export default function Movie(movie: MovieProps) {
  return (
    <div className="col-span-4 z-10 w-dvh flex flex-1 justify-center items-center flex-col px-5 mb-3">
      <div className="items-start">
        <motion.div
          initial="hidden"
          animate={"visible"}
          className="flex flex-col"
        >
          <AnimatedText
            className="spacing overflow-hidden text-[#D5D5D6]"
            text={movie.Genre}
          />
          <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
          <AnimatedText
            className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]"
            text={movie.Title}
          />
          <AnimatedText
            className="text-s mt-6 text-[#D5D5D6]"
            text={movie.$vectorize}
          />
        </motion.div>
        <motion.div initial="hidden" animate={"visible"} className="flex flex-col mt-5">
          <p><b>Directed by: </b>{movie.Director}</p>
          <p><b>Featuring: </b>{movie.Actors}</p>
          <p><b>Box Office: </b>{movie.BoxOffice}</p>
          <p><b>Released: </b>{movie.Released}</p>
          <p><b>Runtime: </b>{movie.Runtime}</p>
          <p><b>Rated: </b>{movie.Rated}</p>
          <p><b>IMDB Rating: </b>{movie.imdbRating}</p>
          <p><b>Language: </b>{movie.Language}</p>
          <p><b>Country: </b>{movie.Country}</p>
        </motion.div>
      </div>
    </div>
  );
}
