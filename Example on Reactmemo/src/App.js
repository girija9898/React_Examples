import { useState } from "react";
import TextComponent from "./TextComponent";

function App() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState('');

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    setCount((prev) => prev - 1);
  };
  const textChanged = (e) => {
    setText(e.target.value);
  }

  return ( 
    <center>
      <form>
        <input type="button" onClick={incrementHandler} value="Increment" /> &nbsp; &nbsp;&nbsp;
        <input type="button" onClick={decrementHandler} value="Decrement" />
      </form>
        <h3>Count: {count} </h3>
      <hr />
      <form>
        <input type='text' onChange={textChanged} />
      </form>
      <TextComponent text={text} />
    </center>
  );
}

export default App;
