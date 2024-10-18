import { Text, FlatList } from 'react-native';
import React from 'react';
import ListCardView from './ListCardView';
import TaskList from '@/database/model/TaskList';
import { withObservables } from '@nozbe/watermelondb/react';

import { getTaskLists } from '@/database/functions/task-lists';

type ListOfTaskListsViewProps = {
	taskLists: TaskList[];
};

const enhance = withObservables([], () => ({
	taskLists: getTaskLists(),
}));

function ListOfTaskListsView({ taskLists }: ListOfTaskListsViewProps) {
	return (
		<FlatList
			contentContainerStyle={{ gap: 10 }}
			ListEmptyComponent={<Text>Ajouter votre premier liste ...</Text>}
			data={taskLists}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <ListCardView list={item} />}
		/>
	);
}

export default enhance(ListOfTaskListsView);
