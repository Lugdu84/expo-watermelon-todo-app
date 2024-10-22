import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import TaskList from '@/database/model/TaskList';
import { deleteTaskList } from '@/database/functions/task-lists';
import { Swipeable } from 'react-native-gesture-handler';
import { useRef } from 'react';
import { SelectedRow } from './ListOfTaskListsView';

type ListCardViewProps = {
	list: TaskList;
	lastSelectedTaskList: SelectedRow | null;
	setSelectedTaskList: (selectedRow: SelectedRow | null) => void;
};

export default function ListCardView({
	list,
	lastSelectedTaskList,
	setSelectedTaskList,
}: ListCardViewProps) {
	const swipeableRef = useRef<Swipeable>(null);

	const handleIfSwipeAlreadyOpen = () => {
		if (list.id !== lastSelectedTaskList?.id) {
			lastSelectedTaskList?.ref.close();
			setSelectedTaskList({ id: list.id, ref: swipeableRef.current! });
		}
	};
	return (
		<Swipeable
			ref={swipeableRef}
			onSwipeableOpen={handleIfSwipeAlreadyOpen}
			renderRightActions={() => (
				<View style={styles.actions}>
					<Pressable
						style={styles.buttons}
						onPress={() => deleteTaskList(list.id)}>
						<Fontisto
							name="trash"
							size={20}
						/>
					</Pressable>
				</View>
			)}>
			<View style={styles.rowCardContainer}>
				<Text>{list.name}</Text>
				<AntDesign
					name="right"
					size={20}
				/>
			</View>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	rowCardContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderRadius: 10,
		backgroundColor: 'white',
	},
	actions: {
		flexDirection: 'row',
		flex: 1 / 2,
	},
	buttons: {
		backgroundColor: 'red',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
