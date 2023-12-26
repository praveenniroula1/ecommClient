import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./User/Dashboard";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import ForgotPassword from "./Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
