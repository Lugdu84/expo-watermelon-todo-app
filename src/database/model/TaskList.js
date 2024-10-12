import { Model } from '@nozbe/watermelondb';
import { field, date, readonly, text } from '@nozbe/watermelondb/decorators';

export default class TaskList extends Model {
	static table = 'task_lists';

	@text('name') name;
	@text('description') description;
	@readonly @date('created_at') createdAt;
	@readonly @date('updated_at') updatedAt;
	@field('is_archived') isArchived;
}
