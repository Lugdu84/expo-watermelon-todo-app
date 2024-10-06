import { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

type AddViewProps = {
	onAdd: (text: string) => void;
	placeholder: string;
};

export default function AddView({ onAdd, placeholder }: AddViewProps) {
	const [text, setText] = useState('');

	const handleAdd = () => {
		onAdd(text);
		setText('');
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={setText}
				value={text}
				placeholder={placeholder}
				clearButtonMode="always"
			/>
			{text && (
				<Pressable
					disabled={!text}
					onPress={handleAdd}
					style={styles.buttonAdd}>
					0<Text>Ajouter</Text>
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
	},
	input: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white',
		borderRadius: 10,
		marginRight: 10,
	},
	buttonAdd: {
		backgroundColor: 'green',
		padding: 10,
		alignItems: 'center',
		borderRadius: 10,
		width: 80,
	},
});
