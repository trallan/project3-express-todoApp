import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <>
       <BrowserRouter>
       <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
