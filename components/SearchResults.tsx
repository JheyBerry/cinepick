"use client";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import AnimatedText from "./AnimatedText";
import { MovieSumary } from "../types";

export default function SearchResults({
  searchResults,
  term,
}: {
  searchResults: MovieSumary[];
  term: string;
}) {
  return (
    <div className="relative p-8 h-screen">
      <div className="pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate={"visible"}
          className="flex flex-col"
        >
          <AnimatedText
            className="spacing overflow-hidden text-[#D5D5D6]"
            text={"Movies based on your search:"}
          />
          <motion.span layout className="mt-2 h-1 w-5 rounded-full bg-white" />
          <AnimatedText
            className="my-1 text-xl text-orange-300 font-semibold md:my-3 md:text-8xl md:leading-[100px]"
            text={term}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-10">
        {searchResults.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
