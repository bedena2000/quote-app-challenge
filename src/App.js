import React, { Component } from 'react';

// Routing
import { Routes, Route } from 'react-router-dom';

// Component
import Reload from './components/Reload';
import Footer from './components/Footer';

// Pages
import MainPage from './pages/MainPage';
import AuthorQuotes from './pages/AuthorQuotes';

const App = () => {
  return (
    <div className="min-h-screen pt-[12px] pb-[12px] flex flex-col justify-between">
      <div>
        <Reload />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/authorQuotes" element={<AuthorQuotes />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
