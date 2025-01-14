
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PostsPage from './Pages/PostsPage';
import PostDetailsPage from './Pages/PostDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:postId" element={<PostDetailsPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
