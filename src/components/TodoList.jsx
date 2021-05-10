import { useState } from 'react'
import AddTodo from './AddTodo'
import './TodoList.css'


const TodoList = () => {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'Study React', isDone: false },
		{ id: 2, title: 'Wash windows', isDone: true },
		{ id: 3, title: 'Study more', isDone: false }
	])

	const addTodoItem = title => {
		// todoList.push  <- fungerar inte i React
		setTodoList( [
			...todoList,
			{ id: todoList.length + 1, title, isDone: false }
		] )
	}

	const markAsDone = id => {
		// todoList[0].isDone = true  <- fungerar inte i React
		setTodoList(todoList.map(todoItem => {
			if( todoItem.id === id ) {
				return { ...todoItem, isDone: true }
			} else {
				return todoItem
			}
		}))
	}

	// Higher order functions for arrays: forEach, map, filter, find...
	const jsxList = todoList.map(todoItem => (
		<li key={todoItem.id} className={todoItem.isDone ? 'done' : ''}>
			{todoItem.title}
			{todoItem.isDone ? null :
				<button onClick={() => markAsDone(todoItem.id)}> Done </button>}
		</li>
	))

	return (
		<div className="todo-list">
			<ul>
				{jsxList}
			</ul>
			<AddTodo addTodoItem={addTodoItem} />
		</div>
	)
}

export default TodoList