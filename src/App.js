import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { completed: false, title: "Task #1" },
    { completed: false, title: "Task #2" },
    { completed: false, title: "Task #3" },
  ]);

  const [newItemTitle, setNewItemTitle] = useState("");

  const handler = (e) => {
    setNewItemTitle(e.target.value);
  };
  // const [count, setCount] = useState(20);

  // const countState = useState(20);
  // const count = countState[0];
  // const setCount = countState[1];

  const keyDownHandler = ({ key }) => {
    if (key === "Enter") {
      const newTodos = [...todos];
      newTodos.push({ completed: false, title: newItemTitle });
      setTodos(newTodos);
      setNewItemTitle("");
    }
  };

  const toggle = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      const isCompleted = todos[todoIndex].completed;
      return {
        ...todo,
        completed: index === todoIndex ? !isCompleted : isCompleted,
      };
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                toggle(index);
              }}
              className={todo.completed ? "completed" : ""}
            >
              {todo.title}
            </li>
          );
        })}
      </ul>
      <h2>{newItemTitle}</h2>

      <input
        type="text"
        value={newItemTitle}
        onChange={handler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
}

export default App;
