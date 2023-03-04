import React, { useEffect, useState } from "react"
import useMouse from "../hooks/useMouse";

const Mouse = (props) => {
  const coords = useMouse();

  const style = {
    fontSize: `${coords.y / 10}px`,
    border: `10px dotted rgb(${coords.x / 4}, 0, ${coords.y / 4})`,
    backgroundColor: `rgb(0, ${coords.x / 4}, 0, ${coords.y / 4})`,
    padding: '10px',
    color: `rgb(${coords.x / 4}, 0, ${coords.y / 4})`
  }

  
  const message = coords.y < 500 ? "Dr. Dre Said...." : "Nothing you idiot, Dr Dre's dead! He's locked in my basement! ha ha";

  return (
    <div style={style}>
      <h1>{message}</h1>
      <h3>X: {coords.x} Y: {coords.y}</h3>
    </div>
  )
};

export default Mouse;
