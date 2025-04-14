"use client";

import React from "react";
import MovieCard from "../components/MovieCard";
import Controls from "../components/Controls";
import { MovieProps, MovieSumary } from "../types";

function MoviesCarousel({ movies }: { movies: MovieProps[] }) {
  const movieCollection = movies;
  const initData = Object.freeze(movies[0]);

  const [sliderData, setData] = React.useState<MovieSumary[]>(movieCollection.slice(1));
  const [transitionData, setTransitionData] = React.useState<MovieProps>(movieCollection[0]);


  return (
    <div>
      <div className="relative inline-flex w-full items-center justify-center gap-6 overflow-hidden rounded-lg p-4">
        <div className=" flex w-full gap-6">
          {sliderData.map((sliderData) => {
            return <MovieCard key={sliderData.Poster} movie={sliderData} />
          })}
        </div>
      </div>
      <Controls
        movieCollection={movieCollection}
        transitionData={transitionData}
        initData={initData}
        handleData={setData}
        handleTransitionData={setTransitionData}
        sliderData={sliderData}
      />
    </div>
  );
}

export default MoviesCarousel;
