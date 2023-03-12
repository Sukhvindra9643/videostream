import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo"
import Auth from "./pages/Auth"
import VideoDetails from './pages/VideoDetails';
import Videos from './pages/Videos';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="register" element={<Auth />} />
          <Route path="create" element={<UploadVideo/>} />
          <Route path="videos" element={<Videos/>} />
          <Route path="video/:id" element={<VideoDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
