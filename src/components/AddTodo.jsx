import { useState } from 'react'

const AddTodo = ({ addTodoItem }) => {
	const [title, setTitle] = useState('')

	return (
		<div>
			<input type="text" placeholder="Thing I need to do"
				onChange={event => setTitle(event.target.value)} />
			<button onClick={() => addTodoItem(title)}> Add </button>
		</div>
	)
}

export default AddTodo
