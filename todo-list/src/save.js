import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  return (
    <div {...useBlockProps.save()} className="p-4 bg-white rounded-lg shadow">
      <div className="todo-list-container">
        {attributes.todos?.map(todo => (
          <div 
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
}