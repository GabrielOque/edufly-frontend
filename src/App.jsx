import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ContentCategory from "./pages/ContentCategory";
import ContentDetails from "./pages/ContentDetails";
import CertificationsPage from "./pages/CertificationsPage";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#111115]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/category/:name/:id" element={<ContentCategory />} />
            <Route path="/content/:id/:name/" element={<ContentDetails />} />
            <Route path="/certifications/" element={<CertificationsPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
