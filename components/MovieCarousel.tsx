"use client";

import React from "react";
import MovieCard from "../components/MovieCard";
import Controls from "../components/Controls";
import { MovieProps, MovieOnFocus, MovieSumary } from "../types";

export default function MoviesCarousel({ movies }: { movies: MovieProps[] }) {
  const movieCollection = movies;
  const initData = Object.freeze(movies[0]);

  const [sliderData, setData] = React.useState<MovieSumary[]>(movieCollection.slice(1));
  const [transitionData, setTransitionData] = React.useState<MovieProps>(movieCollection[0]);
  const [currentSlideData, setCurrentSlideData] = React.useState<MovieOnFocus>({
    movie: initData,
    index: 0,
  });

  return (
    <>
      <div className="relative inline-flex items-center justify-center gap-6 rounded-lg p-4">
        <div className="flex w-full gap-6">
          {sliderData.map((sliderData) => {
            return <MovieCard key={sliderData.Poster} movie={sliderData} />
          })}
        </div>
      </div>
      <Controls
        currentSlideData={currentSlideData}
        movieCollection={movieCollection}
        transitionData={transitionData}
        initData={initData}
        handleData={setData}
        handleTransitionData={setTransitionData}
        handleCurrentSlideData={setCurrentSlideData}
        sliderData={sliderData}
      />
    </>
  );
}
