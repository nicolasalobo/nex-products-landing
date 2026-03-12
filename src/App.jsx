import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalesPage from "./pages/SalesPage";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SalesPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
