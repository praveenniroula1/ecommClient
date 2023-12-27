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
import { Adminroute } from "./Routes/Adminroute";
import AdminDashboard from "./Admin/AdminDashboard";
import CreateCategory from "./Admin/CreateCategory";
import Users from "./Admin/Users";
import CreateProduct from "./Admin/CreateProduct";
import Order from "./User/Order";
import Profile from "./User/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<Adminroute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
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
