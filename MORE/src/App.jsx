import { useState } from "react";

import "./App.css";
// import UseReducer from './Concept/useReduce'
import TodoApp from "./Components/ToDoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseReducer/> */}
      <TodoApp />
    </>
  );
}

export default App;
