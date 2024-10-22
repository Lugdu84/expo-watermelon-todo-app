import { Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import ListCardView from './ListCardView';
import TaskList from '@/database/model/TaskList';
import { withObservables } from '@nozbe/watermelondb/react';

import { getTaskLists } from '@/database/functions/task-lists';
import { Swipeable } from 'react-native-gesture-handler';

type ListOfTaskListsViewProps = {
	taskLists: TaskList[];
};

const enhance = withObservables([], () => ({
	taskLists: getTaskLists(),
}));

export type SelectedRow = {
	id: string;
	ref: Swipeable;
};

function ListOfTaskListsView({ taskLists }: ListOfTaskListsViewProps) {
	const [lastSelectedTaskList, setLastSelectedTaskList] =
		useState<SelectedRow | null>(null);
	return (
		<FlatList
			contentContainerStyle={{ gap: 10 }}
			ListEmptyComponent={<Text>Ajouter votre premier liste ...</Text>}
			data={taskLists}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<ListCardView
					list={item}
					lastSelectedTaskList={lastSelectedTaskList}
					setSelectedTaskList={setLastSelectedTaskList}
				/>
			)}
		/>
	);
}

export default enhance(ListOfTaskListsView);
