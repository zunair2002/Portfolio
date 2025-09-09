// src/FluidBackground.js

import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

const FluidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    WebGLFluid(canvasRef.current, {
      SPLAT_COUNT: 0,
      TRANSPARENT: true,
      SPLAT_FORCE: 6000,
      SPLAT_RADIUS: 0.5,
      DENSITY_DISSIPATION: 0.98,
    });
  }, []);

  const canvasStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#000',
  };

  return <canvas ref={canvasRef} style={canvasStyles} />;
};

export default FluidBackground;