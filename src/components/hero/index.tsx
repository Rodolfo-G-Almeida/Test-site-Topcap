/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { banners } from "./banners";
import { imageNoLink, imageWithLink } from "./imagesContainers";
import useWindowSize from "~/utils/useWindowSize";
import { useLocale } from "next-intl";

export default function ResponsiveCarousel() {
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const { width } = useWindowSize();
  const isMobile: boolean = width > 0 && width < 768;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  const handleArrows = (stt: boolean) => {
    stt ? instanceRef.current!.next() : instanceRef.current!.prev();
  };

  return (
    <div className="keen-slider-container">
      <div ref={sliderRef} className="keen-slider">
        {banners.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            {item.link && imageWithLink({locale: locale, link: item.link, isMobile: isMobile, imageUrlMobile: item.imageUrlMobile, imageUrl: item.imageUrl, title: item.title, posObj: item.posObj})}
            {!item.link && imageNoLink({isMobile: isMobile, imageUrlMobile: item.imageUrlMobile, imageUrl: item.imageUrl, title: item.title, posObj: item.posObj})}
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="slider-controls">
          <div className="arrow left" onClick={() => handleArrows(false)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCIgZmlsbC1ydWxlPSJldmVub2RkIgogICAgICAgICAgZD0iTTE4Ljk5NTggOC45OTA3YzAtLjQyNC0uMjA0LS43MjMtLjYxLS44OTgtLjQwOS0uMTczLS43NzItLjEwNC0xLjA5My4yMDlsLTcuMDA2IDYuOTc1Yy0uMjAxLjE5OS0uMjk3LjQzNy0uMjg2LjcxNiAwIC4yNjcuMDk2LjQ5OC4yODYuNjg5bDcuMDA2IDcuMDAxYy4zMjEuMzIxLjY4NC4zODkgMS4wOTMuMjA5LjQwNi0uMTc0LjYxLS40ODIuNjEtLjkyMlY4Ljk5MDd6Ii8+Cjwvc3ZnPg==" />
          </div>
          <div className="arrow right" onClick={() => handleArrows(true)}>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA4Ljk5YzAtLjQyMy4yMDQtLjcyMi42MS0uODk3LjQwOC0uMTczLjc3Mi0uMTA0IDEuMDkyLjIxbDcuMDA2IDYuOTc0Yy4yMDIuMi4yOTguNDM3LjI4Ny43MTYgMCAuMjY3LS4wOTYuNDk4LS4yODcuNjlsLTcuMDA2IDdjLS4zMi4zMi0uNjg0LjM5LTEuMDkyLjIxLS40MDYtLjE3NS0uNjEtLjQ4My0uNjEtLjkyM1Y4Ljk5eiIKICAgICAgICAgIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==" />
          </div>
        </div>
      )}
      {loaded && instanceRef.current && (
        <div className="dots">
          {banners.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
