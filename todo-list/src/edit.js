import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import { useTodos } from './hooks/useTodos';
import './editor.scss';

export default function Edit() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const blockProps = useBlockProps();

  return (
    <div {...blockProps} className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{__('Todo List', 'todo-list')}</h2>
      <TodoInput onAdd={addTodo} />
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}