import React, {useState} from 'react'

const App = () => {
    
    const [count , setCount] = useState(0);
    console.log(count);
    console.log(setCount);

     const handlePlus =()=>{
        setCount(count+1);
     }

     const handleMinus =()=>{
        setCount(count-1);
     } 
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default App
