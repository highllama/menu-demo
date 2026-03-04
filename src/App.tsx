import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileWrapper from "./components/layout/MobileWrapper";
import Home from "./pages/Home";
import RecommendedList from "./pages/RecommendedList";

function App() {
  return (
    <BrowserRouter>
      <MobileWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommended" element={<RecommendedList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileWrapper>
    </BrowserRouter>
  );
}

export default App;
