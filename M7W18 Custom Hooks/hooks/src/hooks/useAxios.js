import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, innerObj) => {
  const [counter, setCounter] = useState(1)
  const [data, setData] = useState('')
  const increment = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const {data} = res;
        console.log(data);
        setData(data[innerObj])
      })
      .catch(err => console.log(err))
  }, [counter, url, innerObj])

  return [counter, data, increment]
}

export default useAxios;