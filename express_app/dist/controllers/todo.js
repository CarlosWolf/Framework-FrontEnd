"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../model/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Todo fue creado...', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todoId = req.params.id;
    const UpdatedText = req.body.text;
    const index = TODOS.findIndex((todo) => todo.id == todoId);
    if (index < 0) {
        throw new Error('Todo no fue encontrado..');
    }
    TODOS[index] = new todo_1.Todo(TODOS[index].id, UpdatedText);
    res.status(201).json({ message: 'Actualizado', updateTodos: TODOS[index] });
};
exports.updateTodos = updateTodos;
const deleteTodos = (req, res, next) => {
    const todoId = req.params.id;
    const index = TODOS.findIndex((todo) => todo.id == todoId);
    if (index < 0) {
        throw new Error('Todo no fue encontrado');
    }
    TODOS.splice(index, 1);
    res.json({ message: 'Eliminado' });
};
exports.deleteTodos = deleteTodos;
