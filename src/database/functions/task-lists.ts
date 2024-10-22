import { database } from '@database/database';
import TaskList from '@database/model/TaskList';
import { Q } from '@nozbe/watermelondb';

export const addTaskList = async (name: string) => {
	const newTaskList = await database.write(async () => {
		const newTaskList = await database
			.get<TaskList>('task_lists')
			.create((taskList) => {
				taskList.name = name;
			});
		return newTaskList;
	});
	return newTaskList;
};

export const getTaskLists = () => {
	return database.get<TaskList>('task_lists').query(Q.sortBy('name')).observe();
};

export const deleteTaskList = (id: string) => {
	database.write(async () => {
		const taskList = await database.get<TaskList>('task_lists').find(id);
		await taskList.destroyPermanently();
	});
};
