import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="container-fluid">
      <AppName />
      <AddTodo />
      <TodoItem title={"buy milk"} date={"12/12/2023"}/>
      <TodoItem title={"Go to college"} date={"13/12/2023"}/>
</div>
  );
}

export default App;
