import { useDispatch } from "react-redux";
import {useState} from "react";
import {add} from "../component/todoSlice";

function TodoGenerator(){
    const dispatch = useDispatch();
    const [context, setContext] = useState("");
    const handleChange = (e) =>{
        setContext(e.target.value)
    }
    const handleClick = (e) => {
        const todo= {
            context,
            done: false
        }
        dispatch(add(todo));
    }
    return(
        <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleClick}>add</button>
        </div>
    )
}

export default TodoGenerator;