import { useState } from "react"
import style from '../styles/Hello.module.css'

export default function SteveJobsHello() {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return  (
    <div>
      <h1 className={style.title}>Hello everyone!</h1>
      <p className={style.counter}>Counter: {counter}</p>
      <div className={style.btnContainer}>
        <button onClick={increment} className={style.btn}>Increment</button>
        <button onClick={decrement}  className={style.btn}>Decrement</button>
      </div>
    </div>
  )
}



// App.get('/hello', (req, res) =>{
//   res.render(
//     return  (
//       <div>
//         <h1>Hello everyone!</h1>
//       </div>
//     )
//   )
// })