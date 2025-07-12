import React from "react"

function InputComponent(props, ref) {
    return(
        <>
            <div>
                <input type="text" ref={ref} />
            </div>
        </>
    )
}

export default React.forwardRef(InputComponent);