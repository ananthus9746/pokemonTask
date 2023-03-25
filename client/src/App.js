import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/HomePage/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

    </>
  );
}

export default App;
