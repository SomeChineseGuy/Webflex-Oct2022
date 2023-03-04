import { useEffect, useState } from "react";

const useKeyPress = (key) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  useEffect(() => {
    const downHandler = (event) => {
      if(event.key === key) {
        setIsKeyPressed(true)
      }
    }

    const upHandler = (event) => {
      if(event.key === key) {
        setIsKeyPressed(false)
      }
    }
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    const cleanup = () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }

    return cleanup
    
  }, [isKeyPressed, key])
  return isKeyPressed;
}

export default useKeyPress;

const name = () => {
  return 'Mario'
}
