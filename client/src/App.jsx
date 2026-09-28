import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { loginUser } from "./services/authService";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Category from "./Pages/Category";
import MainLayouts from "./layouts/MainLayouts";
import ProfileDashboard from "./AccountComponents/ProfileDashboard";
import Deals from "./Pages/Deals";
import NotFound from "./Pages/NotFound";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import ContactPage from "./Pages/ContactPage";
import Login from "./Pages/admin/Login";
import AdminLayout from "./layouts/AdminLayouts";
import Dashboard from "./admin/components/Dashboard/Dashboard";
import Products from "./admin/components/Dashboard/Products";
import Categories from "./admin/components/Dashboard/Categories";
import Orders from "./admin/components/Dashboard/Orders";
import Clients from "./admin/components/Dashboard/Clients";
import Analytics from "./admin/components/Dashboard/Analytics";
import AI from "./admin/components/Dashboard/AI";
import AboutUs from "./aboutUs/AboutUs";
import LoginUser from "./reused components/Login";
import Register from "./reused components/Register";
import EditProduct from "./admin/components/Dashboard/EditProduct";
import ProfileLayouts from "./layouts/ProfileLayouts";
import OrderDashboard from "./AccountComponents/OrderDashboard";
import AdminProtectedRoute from "./reused components/AdminProtectedRoute";
import Checkout from "./CheckoutComponent/Checkout";
import CategoryEdit from "./admin/components/Dashboard/CategoryEdit";
import OrderEdit from "./admin/components/Dashboard/OrderEdit";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (form) => {
    try {
      const data = await loginUser(form.email, form.password);

      console.log("LOGIN SUCCESS:", data);

      navigate("/profile/info");
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      throw err;
    }
  };

  return <LoginUser onSubmit={handleLogin} />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Route>

      <Route path="/profile" element={<ProfileLayouts />}>
        <Route path="info" element={<ProfileDashboard />} />
        <Route path="orders" element={<OrderDashboard />} />
        <Route path="saved-items" element={<ProfileDashboard />} />
        <Route path="track-order" element={<ProfileDashboard />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/Register" element={<Register />} />

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Clients />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="products/:id/edit" element={<EditProduct />} />
        <Route path="categories/:id/edit" element={<CategoryEdit />} />
        <Route path="order/:id/edit" element={<OrderEdit />} />
        <Route path="Ai" element={<AI />} />
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
