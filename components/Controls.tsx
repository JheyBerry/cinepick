"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ControlProps } from "../types";
import ControlButton from "./ControlButton";
import Progress from "./Progress";

export default function Controls({
  sliderData,
  movieCollection,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  currentSlideData,
  initData,
}: ControlProps) {
  const handlePrev = () => {
    handleData((prevData) => [
      initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);

    handleTransitionData({
      ...initData,
      ...sliderData[sliderData.length - 1],
    });

    updateCurrentSlideData(movieCollection[0]);
  };

  const handleNext = () => {
    handleData((next) => next.slice(1));

    handleTransitionData({
      ...initData,
      ...sliderData[0],
    });

    updateCurrentSlideData(initData);
  };

  const updateCurrentSlideData = (initSlide: typeof initData) => {
    handleCurrentSlideData({
      movie: initSlide,
      index: movieCollection.findIndex((movie) => JSON.stringify(movie) === JSON.stringify(currentSlideData.movie)),
    });
  };

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <ControlButton handleClick={handlePrev}>
        <IoIosArrowBack className=" text-xl" />
      </ControlButton>
      <ControlButton handleClick={handleNext}>
        <IoIosArrowForward className=" text-xl" />
      </ControlButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </div>
  );
}
