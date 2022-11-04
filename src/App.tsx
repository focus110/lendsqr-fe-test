import React from 'react';
import './App.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login, NotFound } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
