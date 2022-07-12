import React, { FC } from "react";
import { useNProgress } from "@tanem/react-nprogress";
import { TopbarLoaderProps } from "./TopbarLoader.types";

const TopbarLoader: FC<TopbarLoaderProps> = ({ isRouteChanging }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  });

  return (
    <div
      className="c-top-loader"
      style={{
        transition: `opacity ${animationDuration}ms linear`,
        opacity: `${isFinished ? 0 : 1}`,
      }}
    >
      <div
        className="c-top-loader__bar"
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      >
        <div className="c-top-loader__spinner" />
      </div>
    </div>
  );
};

export default TopbarLoader;
