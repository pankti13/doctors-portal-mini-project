import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <main className="relative">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </main>
);

export default App;
