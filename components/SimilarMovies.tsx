"use client";
import React from "react";
import MoviesCarousel from "./MovieCarousel";
import MovieInfo from "./MovieInfo";
import Controls from "./Controls";
import BackgroundImage from "./BackgroundImage";
import { MovieProps, MovieSumary, MovieOnFocus } from "../types";
import { AnimatePresence } from "framer-motion";

export default function SimilarMovies({ movies }: { movies: MovieProps[] }) {
  const movieCollection = movies;
  const initData = Object.freeze(movies[0]);

  const [sliderData, setData] = React.useState<MovieSumary[]>(
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
    <AnimatePresence>
      <BackgroundImage
        transitionData={transitionData}
        currentSlideData={currentSlideData}
      />
      <div className="flex h-screen overflow-hidden">
        <div className="col-span-4 z-10 w-dvh flex flex-1 justify-center items-center flex-col px-5 mb-3">
          <MovieInfo
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
        </div>
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
      </div>
    </AnimatePresence>
  );
}
