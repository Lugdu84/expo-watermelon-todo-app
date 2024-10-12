import AddView from '@/components/AddView';
import ListCardView from '@/components/ListCardView';
import { addTaskList } from '@/database/functions/task-lists';
import { StyleSheet, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const handleAdd = async (text: string) => {
		await addTaskList(text);
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
				data={null}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ListCardView list={item} />}
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
