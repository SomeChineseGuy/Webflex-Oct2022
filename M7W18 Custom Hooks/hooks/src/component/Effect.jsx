import axios from "axios";
import React, { useEffect, useState } from "react"
import useAxios from "../hooks/useAxios";

const Effect = (props) => {
  // const [counter, setCounter] = useState(1)
  // const [counter2, setCounter2] = useState(1)
  // const [fact, setFact] = useState('')
  // const [pic, setPic] = useState('')
  // useEffect(() => {
  //   axios.get('https://catfact.ninja/fact')
  //     .then(res => {
  //       // console.log(res);
  //       setFact(res.data.fact)
  //     })
  //     .catch(err => console.log(err))
  // }, [counter])

  // useEffect(() => {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //     .then(res => {
  //       console.log(res);
  //       // setFact(res.data.fact)
  //       setPic(res.data.message)
  //     })
  //     .catch(err => console.log(err))
  // }, [counter2])

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  // const increment2 = () => {
  //   setCounter2(counter2 + 1)
  // }

  const [counter, fact, increment] = useAxios('https://catfact.ninja/fact', 'fact')
  const [counter2, fact2, increment2] = useAxios('https://dog.ceo/api/breeds/image/random', 'message')
  return (
    <div>
      <div>
        <h1>Cat Fact: #{counter}</h1>
        <h1>{fact}</h1>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <h1>Dog Pic: #{counter2}</h1>
        <img src={fact2} alt="" />
        <button onClick={increment2}>Increment</button>
      </div>

    </div>
  )
};

export default Effect;
