import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import MainLayouts from "./layouts/MainLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      {/* <Route path="/about" element={About} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/contact" element={Contact} />
      <Route path="/product" element={Product} /> */}
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
