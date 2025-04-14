"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ControlProps } from "../types";
import ControlButton from "./ControlButton";

export default function Controls({
  sliderData,
  transitionData,
  handleData,
  handleTransitionData,
  initData,
}: ControlProps) {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);

    handleTransitionData({
      ...initData,
      ...sliderData[sliderData.length - 1],
    });
  };

  const handleNext = () => {
    handleData((next) => next.slice(1));

    handleTransitionData({
      ...initData,
      ...sliderData[0],
    });

    setTimeout(() => {
      handleData((newData) => [
        ...(Array.isArray(newData) ? newData : []),
        transitionData ? transitionData : initData,
      ]);
    }, 100);
  };

  return (
    <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
      <ControlButton handleClick={handlePrev}>
        <IoIosArrowBack className=" text-xl" />
      </ControlButton>
      <ControlButton handleClick={handleNext}>
        <IoIosArrowForward className=" text-xl" />
      </ControlButton>
    </div>
  );
}
