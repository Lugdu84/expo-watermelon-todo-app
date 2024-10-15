import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TaskList from '@/database/model/TaskList';

type ListCardViewProps = {
	list: TaskList;
};

export default function ListCardView({ list }: ListCardViewProps) {
	return (
		<View style={styles.rowCardContainer}>
			<Text>{list.name}</Text>
			<AntDesign
				name="right"
				size={20}
			/>
		</View>
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
});
