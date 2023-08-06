import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { addToDo, getAllToDo, updateTodo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoID, setTodoID] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoID(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="Top">
          <input
            type="text"
            placeholder="Add ToDo's....."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(todoID, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
