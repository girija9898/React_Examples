

export default function TextComponent ( {text, textChanged} ) {
    return (

        <>
            <input type="text" onChange={textChanged} />
            <h3>Text: {text} </h3>
        </>
    )
}