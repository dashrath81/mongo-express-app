import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // Get all todos
  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Add todo
  const addTodo = async () => {
    await axios.post("http://localhost:5000/todos", { title });
    setTitle("");
    getTodos();
  };

  // Delete
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    getTodos();
  };

  // Update (edit title)
  const updateTodo = async (id) => {
    const newTitle = prompt("Enter new title:");
    await axios.put(`http://localhost:5000/todos/${id}`, { title: newTitle });
    getTodos();
  };

  return (
    <div>
      <h2>Simple TODO App</h2>

      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item) => (
          <li key={item._id}>
            {item.title}

            <button onClick={() => updateTodo(item._id)}>Edit</button>
            <button onClick={() => deleteTodo(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
