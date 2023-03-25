import './App.css';
import { Route, Routes, } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import UserAuth from './ProtectiveRoutes/UserAuth';



function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<UserAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
        
      </Routes>

    </>
  );
}

export default App;
