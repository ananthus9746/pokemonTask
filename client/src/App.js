import './App.css';
import { Route, Routes, } from "react-router-dom";
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import UserAuth from './ProtectiveRoutes/UserAuth';
import HomeTwo from './pages/HomePage/HomeTwo';



function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<UserAuth />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<HomeTwo />} /> */}

        </Route>
        
      </Routes>

    </>
  );
}

export default App;
