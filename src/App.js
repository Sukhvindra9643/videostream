import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Video from "./pages/Video"
import Signin_Signup from "./pages/Signin_Signup"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="register" element={<Signin_Signup />} />
          <Route path="create" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
