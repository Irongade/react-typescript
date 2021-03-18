import React,{ useRef } from "react";
import "./NewTodo.css"

type AddToDoProps = {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<AddToDoProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const submitTodo = (event: React.FormEvent) => {
        event.preventDefault();

        const textResult = inputRef.current!.value

        props.onAddTodo(textResult)

        inputRef.current!.value = "";
    }
    
    return(
        <form onSubmit={submitTodo}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={inputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}


export default NewTodo;