// src/common/Magnetic/index.jsx

'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import useGSAP from '../../hooks/useGSAP';

export default function Magnetic({ children }) {
  const magneticRef = useRef(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(magneticRef.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yTo = gsap.quickTo(magneticRef.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magneticRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magneticRef.current.addEventListener('mousemove', handleMouseMove);
    magneticRef.current.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      magneticRef.current.removeEventListener('mousemove', handleMouseMove);
      magneticRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
}
