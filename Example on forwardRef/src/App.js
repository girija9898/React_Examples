import React from 'react';
import InputComponent from "./InputComponent";

function App() {
  
  const textBoxRef = React.createRef();

  const setFocus = () => {
    textBoxRef.current.focus();
  }
  return (
    <>
      <h3>Example on forwardRef - on click of button, the input element should get the focus</h3>
      <div>
        <button onClick={setFocus}>Set Focus</button>
      </div> <br /><br/>
      <InputComponent ref={textBoxRef} />
    </>
  )
}

export default App;

