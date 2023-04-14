import { useState, useEffect } from 'react';

function getViewportDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height }
}

const useViewportDimensions = () => {
  const [viewportDimensions, setViewportDimensions] = useState(getViewportDimensions())

  useEffect(() => {
    function handleResize() {
      setViewportDimensions(getViewportDimensions())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return viewportDimensions
}

export default useViewportDimensions