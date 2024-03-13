import { useLayoutEffect, useState } from 'react';

type WindowSize = {
  width: number
  height: number
}

export default function useWindowSize(): WindowSize {
  const [size, setSize] = useState({width: 0, height: 0})

  const updateSize = (): void => {
    setSize({width: window.innerWidth, height: window.innerHeight})
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}
