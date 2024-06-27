import React, { useRef, useEffect, useState } from "react";

export const CircleAndSquare = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      const width = canvas.width;
      const height = canvas.height;

      ctx.beginPath();
      ctx.strokeRect((width - 100) / 2, 0, 100, 100);

      ctx.beginPath();
      ctx.arc(width - 150, 100 / 2, 100 / 2, 0, 2 * Math.PI); // Draws the circle

      ctx.stroke();
    }
  });

  return <canvas ref={canvasRef} />;
};
