import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const updateMatches = () => {
      setMatches(mediaQuery.matches)
    };

    updateMatches()

    const listener = () => {
      updateMatches()
    }

    mediaQuery.addListener(listener)

    return () => {
      mediaQuery.removeListener(listener)
    }
  }, [query])

  return matches
}

export default useMediaQuery
