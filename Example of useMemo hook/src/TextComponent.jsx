import React from "react";

function TextComponent ( {text, textChanged} ) {
    return (
        <>
            {console.log("TextComponent rendered")}
            <input type="text" onChange={textChanged} />
            <h3>Text: {text} </h3>
        </>
    )
}

export default React.memo(TextComponent);