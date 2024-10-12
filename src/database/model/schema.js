import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
	version: 1,
	tables: [
		tableSchema({
			name: 'task_lists',
			columns: [
				{ name: 'name', type: 'string' },
				{ name: 'description', type: 'string', isOptional: true },
				{ name: 'created_at', type: 'number' },
				{ name: 'updated_at', type: 'number' },
				{ name: 'is_archived', type: 'boolean' },
			],
		}),
	],
});
