import { Platform } from 'react-native';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './model/schema';
import migrations from './model/migrations';
import TaskList from './model/TaskList';

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
	schema,
	// (You might want to comment it out for development purposes -- see Migrations documentation)
	migrations,
	// (optional database name or file system path)
	dbName: 'todo',
	// (recommended option, should work flawlessly out of the box on iOS. On Android,
	// additional installation steps have to be taken - disable if you run into issues...)
	jsi: Platform.OS === 'ios',
	// (optional, but you should implement this method)
	onSetUpError: (error) => {
		// Database failed to load -- offer the user to reload the app or log out
	},
});

// Then, make a Watermelon database from it!
export const database = new Database({
	adapter,
	modelClasses: [TaskList],
});

export const resetDB = async () => {
	await database.write(async () => {
		await database.unsafeResetDatabase();
	});
};
