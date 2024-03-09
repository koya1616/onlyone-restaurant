'use client'

import React, { useRef } from 'react';
import { useInView } from "framer-motion";

interface WhatIsThisProps {
  children: React.ReactNode;
  speed?: 'slow' | 'fast';
}

const WhatIsThis = ({ children, speed = 'slow' }: WhatIsThisProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const transitionSettings = speed === 'slow'
    ? 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s'
    : 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s';

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: transitionSettings,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default WhatIsThis