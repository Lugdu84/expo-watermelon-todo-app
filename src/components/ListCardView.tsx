import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type ListCardViewProps = {
	list: any;
};

export default function ListCardView({ list }: ListCardViewProps) {
	return (
		<View style={styles.rowCardContainer}>
			<Text>Nom de la liste</Text>
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
