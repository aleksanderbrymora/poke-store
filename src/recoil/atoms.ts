import { atom } from 'recoil';

export const todoListState = atom({
	key: 'todoListState',
	default: [],
});

export type todoItemType = {
	id: number;
	text: string;
	isComplete: boolean;
};
