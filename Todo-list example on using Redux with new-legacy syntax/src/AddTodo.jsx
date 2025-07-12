
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";
import { useState } from "react";

export default function AddTodo () {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const textChanged = (e) => {
        setText(e.target.value);
    }
    const add = () => {
        dispatch(addTodo({todoName: text}));
    }

    return(
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" value={text} onChange={textChanged} /> &nbsp;&nbsp;&nbsp;
            <button onClick={add}>Add Todo</button>
        </form>
    )
}