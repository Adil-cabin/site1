import { __ } from '@wordpress/i18n';

export default function TodoItem({ text, completed, onToggle, onDelete }) {
  return (
    <div className="todo-item flex items-center gap-2 p-2 border-b">
      <input 
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="w-4 h-4"
      />
      <span className={completed ? 'line-through text-gray-500' : ''}>
        {text}
      </span>
      <button 
        onClick={onDelete}
        className="ml-auto text-red-500 hover:text-red-700"
        aria-label={__('Delete todo item', 'todo-list')}
      >
        ×
      </button>
    </div>
  );
}