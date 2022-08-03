import { useDispatch } from "react-redux";
import {useState} from "react";
import todoSlice, {add} from "../component/todoSlice";
import "./TodoGenerator.css"
import { v4 } from "uuid";
import { Button } from 'antd';
import { addTodo } from "../apis/todoApi";

function TodoGenerator(){
    const dispatch = useDispatch();
    const [context, setContext] = useState("");
    const handleChange = (e) =>{
        setContext(e.target.value)
    }
    const handleClick = (e) => {
        const todo= {
            context,
        }
        // dispatch(add(todo));
        addTodo(todo).then((response)=>{
            dispatch(add(response.data))
        }).catch((err)=>{
            console.log(err)
        })

    }
    return(
        <div className="input-box">
            <input type="text" onChange={handleChange}></input>


            <Button type="danger" onClick={handleClick}>ADD</Button>
            
        </div>
    )
}

export default TodoGenerator;