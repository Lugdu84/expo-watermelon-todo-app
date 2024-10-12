import { database } from '@database/database';
import TaskList from '@database/model/TaskList';

export const addTaskList = async (name: string) => {
	await database.write(async () => {
		const newTaskList = await database
			.get<TaskList>('task_lists')
			.create((taskList) => {
				taskList.name = name;
			});
		console.log('new task list', newTaskList._raw);
	});
};
