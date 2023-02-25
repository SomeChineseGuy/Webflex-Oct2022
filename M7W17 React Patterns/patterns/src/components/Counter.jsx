import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  const increase = () => {

    setCount((prev) =>{
      console.log(prev);
      return prev + 1
    })

    setCount(count - 1)

    setCount((prev) =>{
      console.log(prev);
      return prev + 1
    })
    setCount((prev) =>{
      console.log(prev);
      return prev + 1
    })
    
  }

  console.log('fire')

  return (
    <div>
      <h1>The Count is {count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter