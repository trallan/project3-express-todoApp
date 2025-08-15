import { useEffect, useState } from 'react';

function TodoData() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todoData')
      .then(response => response.json())
      .then(data => setTodos(data.todos)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ol>
        {todos.map(item => (
            <li key={item.id}>{item.title} <br></br>{item.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default TodoData;
