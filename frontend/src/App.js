import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}  />
          <Route element={<LoginPage/>} path="/login" />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
