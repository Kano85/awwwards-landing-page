// src/hooks/useGSAP.js

import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGSAP = (animationCallback, dependencies = []) => {
  useEffect(() => {
    // Create a GSAP context scoped to the current component
    const ctx = gsap.context(() => {
      animationCallback();
    });

    // Cleanup function to revert the GSAP context
    return () => ctx.revert();
  }, dependencies);
};

export default useGSAP;
