import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import MobileSales from "@/pages/MobileSales";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import PhoneDetails from "./pages/PhoneDetails";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import NoPage from "@/pages/NoPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {[
          { path: "/", component: <Home />, },
          { path: "/mobile-sales", component: <MobileSales />, },
          { path: "/mobile-sales/cart", component: <Cart /> },
          { path: "/mobile-sales/checkout", component: <Checkout /> },
          { path: "/mobile-sales/:id", component: <PhoneDetails /> },
          { path: "/about-us", component: <AboutUs /> },
          { path: "/contact", component: <Contact /> },
          { path: "*", component: <NoPage />, },
        ].map(({ path, component }, key) => (
          <Route path={path} element={component} key={key} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
