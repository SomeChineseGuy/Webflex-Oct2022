import { useEffect, useState } from "react"

const useMouse = () => {
  const [coords, setCoords] = useState({x: 0, y: 0})
  useEffect(() => {
    const mouseHandler = (event) => {
      setCoords({x: event.x, y: event.y})
    }
    document.addEventListener('mousemove', mouseHandler)
    const cleanUp = () => {
      document.removeEventListener('mousemove', mouseHandler)
    }
    // return cleanUp
    return () => {
      document.removeEventListener('mousemove', mouseHandler)
    }
  }, [])

  return coords
}

export default useMouse;