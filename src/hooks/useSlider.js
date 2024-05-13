import { useRef, useState } from "react";

export default function useSlider() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const sliderRef = useRef();

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const sliderHandler = {
    mouseDown: handleMouseDown,
    mouseLeave: handleMouseLeave,
    mouseUp: handleMouseUp,
    mouseMove: handleMouseMove,
  };

  return [sliderRef, sliderHandler];
}
