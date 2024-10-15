import AddView from '@/components/AddView';
import ListCardView from '@/components/ListCardView';
import { resetDB } from '@/database/database';
import { addTaskList, getTaskLists } from '@/database/functions/task-lists';
import TaskList from '@/database/model/TaskList';
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const [taskLists, setTaskLists] = useState<TaskList[]>([]);
	const handleAdd = async (text: string) => {
		const newTaskList = await addTaskList(text);
		// setTaskLists(
		// 	[...taskLists, newTaskList].sort((a, b) => a.name.localeCompare(b.name))
		// );
		fetchTaskLists();
	};

	const handleResetDB = async () => {
		await resetDB();
	};

	useEffect(() => {
		fetchTaskLists();
	}, []);

	const fetchTaskLists = async () => {
		const taskLists = await getTaskLists();
		setTaskLists(taskLists);
	};

	return (
		<SafeAreaView style={styles.container}>
			<AddView
				onAdd={handleAdd}
				placeholder="Ajouter une liste"
			/>
			<FlatList
				contentContainerStyle={{ gap: 10 }}
				ListEmptyComponent={<Text>Ajouter votre premier liste ...</Text>}
				data={taskLists}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ListCardView list={item} />}
			/>
			<Button
				title="Reset DB"
				onPress={handleResetDB}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		gap: 20,
	},
});
