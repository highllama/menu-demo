import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MobileWrapper from './components/layout/MobileWrapper';
// We'll create these pages shortly
import Home from './pages/Home';
import RecommendedList from './pages/RecommendedList';
import FoodDetails from './pages/FoodDetails';

function App() {
  return (
    <BrowserRouter>
      <MobileWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommended" element={<RecommendedList />} />
          <Route path="/item/:id" element={<FoodDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileWrapper>
    </BrowserRouter>
  );
}

export default App;
