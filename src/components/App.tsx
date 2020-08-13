import React from 'react';
import { todoListState, todoItemType } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

const App = () => {
	const todoList = useRecoilValue(todoListState);
	return (
		<div className='App'>
			<TodoItemCreator />
			{todoList.map((t: todoItemType) => (
				<TodoItem key={t.id} />
			))}
		</div>
	);
};

export default App;

const TodoItem = () => {
	return <div>stuff</div>;
};

const TodoItemCreator = () => {
	return <div>creator</div>;
};
