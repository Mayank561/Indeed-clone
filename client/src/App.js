import './App.css';
// import Header from './component/Header';
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost";
import { routePath } from './routes/route';
import AllPost from './pages/AllPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home}element={<Home />}/>
        <Route path={routePath.create} element={<CreatePost/>}/>
        <Route path={routePath.posts} element={<AllPost/>}/>
      </Routes>
    </Router>
  );
}

export default App;
