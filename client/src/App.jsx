import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Categories from "./Pages/Category";
import MainLayouts from "./layouts/MainLayouts";
import Deals from "./Pages/Deals";
import NotFound from "./Pages/NotFound";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import ContactPage from "./Pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
