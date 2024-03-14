import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from "./pages/Signin";
import Singup from "./pages/Singup";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Header from './components/Header';
import './index.css'
import FooterCon from './components/Footer';
import PrivatePart from './components/PrivatePart';
import AdminPrivatePart from './components/AdminPrivatePart';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivatePart />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AdminPrivatePart />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/updatepost/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <FooterCon />
    </BrowserRouter>
  );
}

export default App