import React from "react"
import useKeyPress from "../hooks/useKeyPress";

const KeyPress = (props) => {
  const aPressed = useKeyPress('a')
  const sPressed = useKeyPress('s')
  const dPressed = useKeyPress('d')
  return (
    <div>
      <h1>Hello</h1>
      {aPressed && <h1>🙀</h1>}
      {sPressed && <h1>🙀</h1>}
      {dPressed && <h1>🙀</h1>}
    </div>
  )
};

export default KeyPress;
