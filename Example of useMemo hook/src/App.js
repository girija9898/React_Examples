import React, { useMemo } from "react";
import TextComponent from "./TextComponent";

function App() {

  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');

  const calculatedValue = useMemo( ()=> {
    return expensiveCalculation(count);
  }, [count])
  
  const incrementHandler = () => {
    setCount(prev => prev + 1);
  }
  const decrementHandler = () => {
    setCount(prev => prev - 1);
  }
  const textChanged = (e) => {
    setText(e.target.value);
  }

  return ( 
    <center>
      <form>
        <input type="button" value="Increment" onClick={incrementHandler} /> &nbsp;&nbsp;&nbsp;
        <input type="button" value="decrement" onClick={decrementHandler} />
      </form>
      <h3> Count: {count} </h3>
      <h2>Calculation: {calculatedValue} </h2>
      <hr />
        <TextComponent text={text} textChanged={textChanged} />
    </center>
  )
}

export default App;


function expensiveCalculation (num) {
  console.log("Calculating ...");

  for(let i=0; i < 100000000; i++) {
    num++;
  }

  console.log("Calculated...");
  return num;
}