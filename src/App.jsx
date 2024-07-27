import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SymptomSelection from "./Pages/SymptomSelection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <main className="relative">
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/" element={<SymptomSelection />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  </main>
);

export default App;