import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import PhotoUpload from "./pages/PhotoUpload";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/gallery"
              element={
                <PrivateRoute>
                  <Gallery />
                </PrivateRoute>
              }
            />
            <Route
              path="/upload"
              element={
                <PrivateRoute>
                  <PhotoUpload />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
