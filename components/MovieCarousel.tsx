"use client";

import MovieCard from "../components/MovieCard";
import { MovieSumary } from "../types";

export default function MoviesCarousel({ sliderData }: { sliderData: MovieSumary[] }) {
  return (
    <div className="relative inline-flex items-center justify-center gap-6 rounded-lg p-4">
      <div className="flex w-full gap-6">
        {sliderData.map((sliderData) => {
          return <MovieCard key={sliderData.Poster} movie={sliderData} />
        })}
      </div>
    </div>
  );
}
