import React,{useRef} from "react";

interface NewTodoProps {
    onAddTodo: (text:string) => void;
}
const NewTodo: React.FC <NewTodoProps> = props => {
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredText = inputRef.current!.value;
        props.onAddTodo(enteredText);
    }
    return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="todo-text">Titulo</label>
            <input type="text" id="todo-text" ref={inputRef}></input>
        </div>
        <button>Agregar</button>
    </form>
    );
};

export default NewTodo;