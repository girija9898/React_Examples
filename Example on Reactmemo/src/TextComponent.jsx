
import React from "react";

function TextComponent ({text}) {
    console.log('Text Component Rendered');
    return(
        <h3>Text: {text} </h3>
    )
}

// React.memo will memoize the TextComponent on initial load, and it will re-render only when the text value is changed to optimize the application
export default React.memo(TextComponent); 