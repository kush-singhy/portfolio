import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './components/Blog/blog';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
  );
}

export default App;
