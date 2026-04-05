import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MobileWrapper from "./components/layout/MobileWrapper";
import Home from "./pages/Home";
import RecommendedList from "./pages/RecommendedList";
import MenuProvider from "./providers/MenuProvider";

function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <MobileWrapper>
          <Routes>
            <Route path="/menu" element={<Home />} />
            <Route path="/recommended" element={<RecommendedList />} />
            <Route path="*" element={<Navigate to="/menu" replace />} />
          </Routes>
        </MobileWrapper>
      </MenuProvider>
    </BrowserRouter>
  );
}

export default App;
