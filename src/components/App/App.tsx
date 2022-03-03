import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import AboutPage from '../routes/AboutPage';
import CharsPage from '../routes/CharsPage';
import AppHeader from '../AppHeader';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppHeader/>
      <Routes>
        <Route path="*" element={<Navigate to={'/about'} />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/chars" element={<CharsPage />}/>
        <Route path="/chars/:view" element={<CharsPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
