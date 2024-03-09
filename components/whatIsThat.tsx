'use client'

import React, { useRef } from 'react';
import { useInView } from "framer-motion";

const WhatIsThat = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {isInView && <>{children}</>}
    </div>
  );
}

export default WhatIsThat