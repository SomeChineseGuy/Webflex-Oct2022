import { useState } from "react";

const Pizza = () => {
  const [topping, setTopping] = useState('')
  // const [selectedTopppings, setSelectedToppings] = useState([])
  const [crust, setCrust] = useState('')
  const [pizza, setPizza] = useState({
    selectedTopppings: [],
    crust: '',
    size: 'S'
  })

  console.log('fire');
  const addTopping = () => {
    setTopping("")
    // setSelectedToppings([...selectedTopppings, topping])
    // setSelectedToppings((prev) => {
    //   return [...prev, topping]
    // })

    setPizza((prev) => {
      return {
        ...prev,
        selectedTopppings: [...prev.selectedTopppings, topping]
      }
    })
  }

  const getCrust = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        crust: event.target.value
      }
    })
  }

  const changeSize = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        size: event.target.value
      }
    })
  }

  const order = () => {
    console.log(pizza);
  }
  return (
    <div>
      <h1>Pizza Place (not a hut)</h1>
      <div>
        {pizza.selectedTopppings.map((topping, idx) => {
          return <p key={idx}>{topping}</p>
        })}
      </div>
      <label>Pick your Toppings: {topping}</label>
      <input value={topping} type="text" onChange={(event) => setTopping(event.target.value)}/>
      <button onClick={addTopping}>Add Topping</button>

      <div>
        <p>Crust: {pizza.crust}</p>
        <label>Pick your Crust</label>
        
        <input type="text" value={pizza.crust} onChange={getCrust} />
      </div>
      <div>
        <h2>Size: {pizza.size}</h2>
        <select name="" id="" value={pizza.size} onChange={changeSize}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
      </div>
      <button onClick={order}>Order Pizza</button>
    </div>
  )
}

export default Pizza;