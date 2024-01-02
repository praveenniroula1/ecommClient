import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import PageNotFound from "./Pages/PageNotFound";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./User/Dashboard";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ForgotPassword from "./Auth/ForgotPassword";
import AdminDashboard from "./Admin/AdminDashboard";
import CreateCategory from "./Admin/CreateCategory";
import Users from "./Admin/Users";
import CreateProduct from "./Admin/CreateProduct";
import Order from "./User/Order";
import Profile from "./User/Profile";
import Adminroute from "./Routes/Adminroute";
import Products from "./Admin/Products";
import UpdateProduct from "./Admin/UpdateProduct";
import Search from "../src/Pages/Search";
import ProductDetails from "./Pages/ProductDetails";
import Categories from "./Pages/Categories";
import CategoryProduct from "./Pages/CategoryProduct";
import CartPage from "./Pages/CartPage";
import AdminOrders from "./Admin/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<Adminroute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
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
