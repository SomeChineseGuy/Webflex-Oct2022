import { useEffect, useState } from "react";

const useLocation = () => {
  const [coords, setCoords] = useState({lat: 0, lon: 0})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(data => {
      console.log(data);
      const { coords } = data
      setCoords({lat: coords.latitude, lon: coords.longitude})
    })
  }, [])

  return coords;
}

export default useLocation;