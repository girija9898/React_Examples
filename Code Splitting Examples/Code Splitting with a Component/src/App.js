import React, { useCallback } from "react";
/* This will load the Text Component after loading all the other js/jsx files to optimize performance
  This we can observe by changing the throttling in browser to slow network
  Until the Text Component has loaded, we can add a fallback code in the Suspense component to display in place of the Text Component. Wrap the TextComponent in React.Suspense.
*/
const TextComponent = React.lazy(()=> import('./TextComponent'));

function App() {

  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');
  
  const incrementHandler = () => {
    setCount(prev => prev + 1);
  }
  const decrementHandler = () => {
    setCount(prev => prev - 1);
  }
  const textChanged = useCallback((e) => {
    setText(e.target.value);
  }, [])

  return ( 
    <center>
      <form>
        <input type="button" value="Increment" onClick={incrementHandler} /> &nbsp;&nbsp;&nbsp;
        <input type="button" value="decrement" onClick={decrementHandler} />
      </form>
      <h3> Count: {count} </h3>
      <hr />
      <React.Suspense fallback={<div style={{color: 'blue'}}>Loading ...</div>}>
        <TextComponent text={text} textChanged={textChanged} />
      </React.Suspense>
    </center>
  )
}

export default App;
