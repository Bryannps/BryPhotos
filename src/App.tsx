import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import LoadingSpinner from "./components/LoadingSpinner";
import Notification from "./components/Notification";

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Login />} />
          </Routes>
          
          {/* Componentes globais */}
          <LoadingSpinner />
          <Notification />
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
