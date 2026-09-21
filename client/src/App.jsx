import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Category from "./Pages/Category";
import MainLayouts from "./layouts/MainLayouts";
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Clients />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="Ai" element={<AI />} />
      </Route>
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
