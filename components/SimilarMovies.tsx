"use client";
import React from "react";
import MoviesCarousel from "./MovieCarousel";
import Controls from "./Controls";
import { MovieProps, MovieOnFocus } from "../types";

export default function SimilarMovies({
  similarMoviesData,
}: {
  similarMoviesData: MovieProps[];
}) {
  const movieCollection = similarMoviesData;
  const initData = Object.freeze(similarMoviesData[0]);

  const [sliderData, setData] = React.useState<MovieProps[]>(
    movieCollection.slice(1)
  );
  const [transitionData, setTransitionData] = React.useState<MovieProps>(
    movieCollection[0]
  );
  const [currentSlideData, setCurrentSlideData] = React.useState<MovieOnFocus>({
    movie: initData,
    index: 0,
  });

  return (
    <div className="col-span-6 flex justify-center items-center flex-1 flex-col p-4">
      <div className="relative w-dvh gap-6">
        <MoviesCarousel sliderData={sliderData} />
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
      </div>
    </div>
  );
}
