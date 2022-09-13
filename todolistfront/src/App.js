import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header/Header";
import TodoList from "./pages/TodoList/TodoList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
