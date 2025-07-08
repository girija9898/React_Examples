
import React from "react";

function TextComponent ({text, textChanged}) {
    console.log('Text Component Rendered');
    return (
       <>
          <form>
             <input
                type="text"
                onChange={textChanged}
             />
          </form>
          <h3>Text: {text} </h3>
       </>
    );
}

export default React.memo(TextComponent); 