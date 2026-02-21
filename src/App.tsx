import { TaskProvider } from "context/TaskContext";
import Home from "./Views/Home";

function App() {
  return (
    <TaskProvider>
      {" "}
      <Home />{" "}
    </TaskProvider>
  );
}

export default App;
