import { useState } from 'react'
import AddTodo from './AddTodo'
import './TodoList.scss'


const TodoList = () => {
	const [todoList, setTodoList] = useState([
		{ id: 1, title: 'Study React', isDone: false, editing:false },
		{ id: 2, title: 'Wash windows', isDone: true, editing:false },
		{ id: 3, title: 'Study more', isDone: false,editing:false }
	])
	//const[editing,setEditing] =useState(false)

	const addTodoItem = title => {
		// todoList.push  <- fungerar inte i React
		setTodoList( [
			...todoList,
			{ id: todoList.length + 1, title, isDone: false, editing:false}
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

	const deleteItem = (id)=>{
		setTodoList(todoList.filter(list=>list.id!==id))
	}
	
	const editItem =(id)=>{
		setTodoList(
			todoList.map(todo => {
			  if (todo.id === id) {
				return { ...todo, editing: true }
			} else {
				return todo
			  }
			
			})
       
	
		)}
	const setUpdate = (updatedTitle, id) => {
		setTodoList(
		  todoList.map(todo => {
			if (todo.id === id) {
			  todo.title = updatedTitle
			}
			return todo
		  })
	
		)}
	// Higher order functions for arrays: forEach, map, filter, find...
	const jsxList = todoList.map(todoItem => (
		<li key={todoItem.id} className={todoItem.isDone ? 'done' : ''}>
			{todoItem.title}
			{todoItem.isDone ? null :
				<button onClick={() => markAsDone(todoItem.id)}> Done </button>}
				<button onClick={() => deleteItem(todoItem.id)}> Delete </button>
				<button onClick={() => editItem(todoItem.id)} style={todoItem.editing?{display:'none'}:{display:'block'}}> Edit </button>
				<input type="text" value={todoItem.title} style={todoItem.editing?{display:'block'}:{display:'none'}} className="textInput"onChange ={e=>setUpdate(e.target.value,todoItem.id)} />
		</li>
	))




	return (
		<div className="todo-list">
			<ul>
				{jsxList}
			</ul>
			<AddTodo addTodoItem={addTodoItem} />
			<p className="interpolationExample">
				<h1>Interpolation Example!!</h1>
			</p>

		</div>
	)
}

export default TodoList