import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={__('Add a new todo...', 'todo-list')}
        className="flex-1 p-2 border rounded"
      />
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {__('Add', 'todo-list')}
      </button>
    </form>
  );
}