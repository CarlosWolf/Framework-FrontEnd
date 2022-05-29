import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './models/Todo';
//Al agregar las librerias semantic ui me daban unos errores por eso no puse css en el proyecto
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const AddTodo = (text: string) => {
    setTodos((prevTodos => [...prevTodos,{id: Math.random().toString(),text:text}]));
  }

const todoDelete = (id:string) => {
  setTodos((prevTodos) => {
    return prevTodos.filter((todo)=> todo.id !== id);
  });
};
  return <div className='App'>
    <NewTodo onAddTodo={AddTodo}/>
    <TodoList items={todos} onDelete = {todoDelete}/>
  </div>;
}

export default App;
