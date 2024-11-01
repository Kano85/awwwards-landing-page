// src/context/TransitionContextProvider.jsx

'use client'; // Must be the first line

import React, { createContext, useState } from 'react';

// Create the Transition Context
export const TransitionContext = createContext();

// Create the TransitionContextProvider component
export default function TransitionContextProvider({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
}
