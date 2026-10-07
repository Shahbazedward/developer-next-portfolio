"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.35,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.35,
  });

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    function handleMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);
    }

    function handleLeave() {
      setVisible(false);
    }

    function handleOver(event: MouseEvent) {
      const target = event.target as HTMLElement;

      const interactive = target.closest(
        "a, button, input, textarea, select, [data-cursor-hover]",
      );

      setHovering(Boolean(interactive));
    }

    window.addEventListener(
      "mousemove",
      handleMove,
    );

    window.addEventListener(
      "mouseout",
      handleLeave,
    );

    document.addEventListener(
      "mouseover",
      handleOver,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove,
      );

      window.removeEventListener(
        "mouseout",
        handleLeave,
      );

      document.removeEventListener(
        "mouseover",
        handleOver,
      );
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0.6 : 1,
        }}
      />

      <motion.div
        className="custom-cursor-ring"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.65 : 1,
        }}
      />
    </>
  );
}