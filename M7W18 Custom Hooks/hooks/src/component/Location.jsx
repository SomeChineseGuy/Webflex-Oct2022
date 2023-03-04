import React, { useEffect, useState } from "react"
import useLocation from "../hooks/useLocation";

const Location = (props) => {
  // const [coords, setCoords] = useState({lat: 0, lon: 0})
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(data => {
  //     console.log(data);
  //     const { coords } = data
  //     setCoords({lat: coords.latitude, lon: coords.longitude})
  //   })
  // }, [])
  const coords = useLocation();
  return (
    <div>
      <h1>Lat: {coords.lat}</h1>
      <h1>Lon: {coords.lon}</h1>
    </div>
  )
};

export default Location;
