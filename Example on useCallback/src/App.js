import { useCallback, useState } from "react";
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
  /* On component rander, every function creates new instance, 
  eventhough the text or textChanges function not changes, the TextComponent will re-render (we can observe from console) 
  on increment & decrement functions. So, react consider that textChanged function has changed(from new instance).
  To stop the re-render without change anything in the dependancy, using useCallback 
  ** Still we need React.memo to stop re-render
  */
  const textChanged = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return ( 
    <center>
      <form>
        <input type="button" onClick={incrementHandler} value="Increment" /> &nbsp; &nbsp;&nbsp;
        <input type="button" onClick={decrementHandler} value="Decrement" />
      </form>
        <h3>Count: {count} </h3>
      <hr />
      
      <TextComponent text={text} textChanged={textChanged} />
    </center>
  );
}

export default App;
