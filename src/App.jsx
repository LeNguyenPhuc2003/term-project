import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import TicTacToe from './pages/TicTacToe';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;