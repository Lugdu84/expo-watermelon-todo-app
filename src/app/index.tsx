import AddView from '@/components/AddView';
import ListOfTaskListsView from '@/components/ListOfTaskListsView';
import { resetDB } from '@/database/database';
import { addTaskList } from '@/database/functions/task-lists';
import { StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const handleAdd = async (text: string) => {
		await addTaskList(text);
	};

	const handleResetDB = async () => {
		await resetDB();
	};

	return (
		<GestureHandlerRootView style={styles.container}>
			<AddView
				onAdd={handleAdd}
				placeholder="Ajouter une liste"
			/>
			<ListOfTaskListsView />
			<Button
				title="Reset DB"
				onPress={handleResetDB}
			/>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		gap: 20,
	},
});
