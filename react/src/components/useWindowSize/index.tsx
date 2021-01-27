import React, { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  const handleWindowSize = () => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }

  useLayoutEffect(handleWindowSize, []);

  return size;
}

export default useWindowSize;